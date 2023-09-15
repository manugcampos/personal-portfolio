import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, jobs, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  let articles = null

  return (
    <SimpleLayout
      title="I write about my life as a Coder Lover, Technology Evolution, AI & Digital Products."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles === null || articles === undefined ? (
            <div className="flex h-64 items-center justify-center">
              <h3 className="text-2xl text-zinc-800 dark:text-zinc-100">
                No articles yet
              </h3>
            </div>
          ) : (
            articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))
          )}
        </div>
      </div>
    </SimpleLayout>
  )
}