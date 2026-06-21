import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getRelatedPosts } from "@/lib/blog-data"

interface RelatedPostsProps {
  currentSlug: string
  category: string
}

export function RelatedPosts({ currentSlug, category }: RelatedPostsProps) {
  const relatedPosts = getRelatedPosts(currentSlug, category)

  if (relatedPosts.length === 0) return null

  return (
    <section className="py-16 border-t border-border bg-secondary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Related Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full">
                <Card className="h-full bg-card border-border/60 overflow-hidden group hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 rounded-3xl">
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <span className="text-primary text-xs font-medium uppercase tracking-wider">{post.category}</span>
                    <h3 className="font-serif text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
