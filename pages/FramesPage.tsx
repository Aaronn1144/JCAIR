import React from 'react';
import { Settings, PenTool, Shield } from 'lucide-react';
import { Button } from '../components/Button';

export const FramesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-aviation-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">机架与结构定制</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            金成航空拥有顶尖的碳纤维加工工艺与结构设计团队，为您的负载提供坚固、轻量化的飞行平台。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Settings,
              title: "精密加工",
              desc: "采用进口T700/T800碳纤维板材，CNC精密加工，误差控制在0.05mm以内。"
            },
            {
              icon: Shield,
              title: "结构增强",
              desc: "针对工业级应用优化结构强度，经过严格的跌落与震动测试。"
            },
            {
              icon: PenTool,
              title: "按需设计",
              desc: "根据您的载荷设备（相机、激光雷达等）定制挂载接口与重心布局。"
            }
          ].map((feature, i) => (
            <div key={i} className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 text-center">
              <feature.icon className="h-12 w-12 text-aviation-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-aviation-900 border border-slate-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl font-bold text-white mb-2">需要定制专属机架？</h2>
            <p className="text-slate-400">请联系我们的工程团队，获取免费评估方案。</p>
          </div>
          <Button size="lg" variant="primary">提交需求</Button>
        </div>
      </div>
    </div>
  );
};