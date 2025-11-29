import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../components/Button';

export const LeasingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-aviation-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-16">
          <span className="text-aviation-accent font-semibold tracking-wider uppercase">Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">无人机租赁服务</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            降低资产成本，灵活应对临时项目。我们提供设备租赁及专业飞手服务。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="/images/leasing_service.jpg"
              alt="Team operating drone" 
              className="rounded-lg shadow-2xl border border-slate-800"
              onError={(e) => {
                 (e.target as HTMLImageElement).src = 'https://picsum.photos/800/600?random=50';
              }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">为什么选择租赁？</h2>
            <ul className="space-y-4">
              {[
                "无需承担高额设备采购成本",
                "包含全套保险，飞行无忧",
                "可选配专业持证飞手执行任务",
                "设备定期维护，始终保持最佳状态",
                "灵活租期，支持日租、周租、月租"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-aviation-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-aviation-accent" />
                  </div>
                  <span className="ml-3 text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button size="lg">获取报价</Button>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 rounded-xl p-8 border border-slate-800">
           <h3 className="text-2xl font-bold text-white mb-6">热门租赁机型</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-aviation-900 rounded border border-slate-700">
                <h4 className="text-lg font-bold text-white">应急系留照明无人机</h4>
                <p className="text-slate-400 text-sm mt-2">适用于夜间抢险、大型集会照明。</p>
                <div className="mt-4 text-aviation-accent font-mono">¥3000/天 起</div>
              </div>
              <div className="p-4 bg-aviation-900 rounded border border-slate-700">
                <h4 className="text-lg font-bold text-white">11寸 FPV 电影机</h4>
                <p className="text-slate-400 text-sm mt-2">搭载 RED/Arri 等电影机，高速追拍。</p>
                <div className="mt-4 text-aviation-accent font-mono">¥1500/天 起</div>
              </div>
              <div className="p-4 bg-aviation-900 rounded border border-slate-700">
                <h4 className="text-lg font-bold text-white">玉兔垂起固定翼</h4>
                <p className="text-slate-400 text-sm mt-2">大面积测绘、长距离巡检。</p>
                <div className="mt-4 text-aviation-accent font-mono">¥5000/天 起</div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};