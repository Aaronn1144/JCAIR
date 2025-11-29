import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Settings, Zap } from 'lucide-react';
import { Button } from '../components/Button';
import { DRONE_CATEGORIES, COMPANY_TAGLINE } from '../constants';

// CONSTANT FOR HOME BACKGROUND IMAGE - Easily changeable
const HERO_BG_IMAGE = "https://picsum.photos/1920/1080?random=99";

export const Home: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-aviation-900 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_BG_IMAGE} 
            alt="Drone Hero" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-aviation-900/40 via-aviation-900/60 to-aviation-900"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in">
            {COMPANY_TAGLINE}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light animate-slide-up">
            重新定义飞行极限。金成航空为您提供顶尖的 FPV、行业无人机及定制解决方案。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <Button size="lg" variant="primary" onClick={scrollToProducts}>探索产品</Button>
            <Link to="/leasing">
              <Button size="lg" variant="outline">租赁咨询</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="products" className="py-24 bg-aviation-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">全系产品</h2>
            <div className="w-20 h-1 bg-aviation-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DRONE_CATEGORIES.map((category) => (
              <Link 
                key={category.id} 
                to={`/category/${category.id}`}
                className="group relative h-96 overflow-hidden rounded-sm border border-slate-800"
              >
                <div className="absolute inset-0 bg-slate-900">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-slate-300 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {category.subtitle}
                  </p>
                  <span className="flex items-center text-aviation-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                    了解详情 <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section Preview */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="bg-aviation-900/50 p-8 rounded-sm border border-slate-800 hover:border-aviation-accent/50 transition-colors">
              <div className="w-12 h-12 bg-aviation-accent/10 rounded-full flex items-center justify-center mb-6">
                <Box className="h-6 w-6 text-aviation-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">高端机架定制</h3>
              <p className="text-slate-400 mb-6">
                根据您的载重、续航需求，提供专业碳纤维机架设计与制造。
              </p>
              <Link to="/frames" className="text-aviation-accent hover:text-white text-sm font-medium">查看定制方案 &rarr;</Link>
            </div>

            <div className="bg-aviation-900/50 p-8 rounded-sm border border-slate-800 hover:border-aviation-accent/50 transition-colors">
              <div className="w-12 h-12 bg-aviation-accent/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-aviation-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">应急租赁服务</h3>
              <p className="text-slate-400 mb-6">
                提供各类行业无人机租赁，包括系留照明、巡检、测绘机型。
              </p>
              <Link to="/leasing" className="text-aviation-accent hover:text-white text-sm font-medium">租赁价目表 &rarr;</Link>
            </div>

            <div className="bg-aviation-900/50 p-8 rounded-sm border border-slate-800 hover:border-aviation-accent/50 transition-colors">
              <div className="w-12 h-12 bg-aviation-accent/10 rounded-full flex items-center justify-center mb-6">
                <Settings className="h-6 w-6 text-aviation-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">行业解决方案</h3>
              <p className="text-slate-400 mb-6">
                从电力巡检到影视航拍，为您提供一站式技术支持与设备维护。
              </p>
              <Link to="/contact" className="text-aviation-accent hover:text-white text-sm font-medium">联系专家 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};