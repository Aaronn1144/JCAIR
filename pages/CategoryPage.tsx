import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DRONE_CATEGORIES } from '../constants';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { Button } from '../components/Button';

export const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const category = DRONE_CATEGORIES.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!category) {
    return (
      <div className="min-h-screen bg-aviation-900 flex items-center justify-center text-white">
        Category not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-aviation-900 pt-20">
      
      {/* Header */}
      <div className="bg-slate-950 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> 返回主页
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{category.title}</h1>
          <p className="text-xl text-slate-400 max-w-2xl">{category.subtitle}</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {category.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-500 border border-dashed border-slate-800 rounded-lg">
            <AlertCircle className="h-12 w-12 mb-4 text-aviation-accent opacity-50" />
            <h3 className="text-xl font-medium text-white mb-2">敬请期待</h3>
            <p>该系列产品正在研发升级中...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {category.items.map((item) => (
              <div key={item.id} className="bg-slate-950 rounded-sm overflow-hidden border border-slate-800 hover:border-aviation-accent/50 transition-all duration-300 shadow-lg hover:shadow-aviation-accent/10 flex flex-col md:flex-row h-full">
                
                {/* Image */}
                <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                   <img 
                    src={item.image} 
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                   />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Specs Tags */}
                    {item.specs && (
                      <div className="space-y-2 mb-6">
                        {item.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center text-xs text-slate-300">
                            <div className="w-1.5 h-1.5 bg-aviation-accent rounded-full mr-2"></div>
                            {spec}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-auto">
                    <Link to={`/product/${item.id}`} className="block w-full">
                        <Button variant="outline" size="sm" className="w-full hover:bg-aviation-accent hover:border-aviation-accent hover:text-white">
                        查看详情
                        </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};