'use client';

import { ResearchArticle } from '@/data/families';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, User, Tag } from 'lucide-react';

interface ResearchArticlesProps {
  articles: ResearchArticle[];
  familyColor: string;
}

export default function ResearchArticles({ articles, familyColor }: ResearchArticlesProps) {
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const [filterTag, setFilterTag] = useState<string>('');

  const uniqueTags = Array.from(
    new Set(articles.flatMap(article => article.tags))
  );

  const filteredArticles = articles.filter(article =>
    !filterTag || article.tags.includes(filterTag)
  );

  return (
    <section className="py-12 bg-white rounded-xl shadow-lg">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-4 font-serif">
            研究文章
          </h2>
          <p className="text-stone-600 text-lg">
            学术视角，深入解析
          </p>
        </div>

        {uniqueTags.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setFilterTag('')}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  !filterTag
                    ? 'bg-stone-800 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                全部
              </button>
              {uniqueTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setFilterTag(filterTag === tag ? '' : tag)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    filterTag === tag
                      ? 'bg-stone-800 text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="border border-stone-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <header
                className="p-6 cursor-pointer bg-gradient-to-r from-stone-50 to-white hover:from-stone-100"
                onClick={() => setExpandedArticle(
                  expandedArticle === article.id ? null : article.id
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-stone-800 mb-2 font-serif">
                      {article.title}
                    </h3>
                    <p className="text-stone-600 text-sm mb-3 line-clamp-2">
                      {article.summary}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-stone-500">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {expandedArticle === article.id ? (
                      <ChevronUp className="w-5 h-5 text-stone-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-600" />
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {article.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-stone-100 text-stone-700"
                    >
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              <div
                className={`transition-all duration-500 ${
                  expandedArticle === article.id ? 'max-h-96' : 'max-h-0'
                } overflow-hidden`}
              >
                <div className="p-6 border-t border-stone-200 bg-stone-50">
                  <div className="prose prose-stone max-w-none">
                    <p className="text-stone-700 leading-relaxed whitespace-pre-line font-sans">
                      {article.content}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone-500 text-lg">暂无相关文章</p>
          </div>
        )}
      </div>
    </section>
  );
}