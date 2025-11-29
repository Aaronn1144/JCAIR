import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/Button';
import { COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAIL } from '../constants';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-aviation-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">联系我们</h1>
            <p className="text-slate-400 mb-10 text-lg">
              无论是产品咨询、技术支持还是商务合作，金成航空随时为您服务。
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-aviation-accent" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">电话咨询</h3>
                  <p className="text-slate-400">{COMPANY_PHONE}</p>
                  <p className="text-slate-500 text-sm mt-1">周一至周五 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-aviation-accent" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">电子邮箱</h3>
                  <p className="text-slate-400">{COMPANY_EMAIL}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-aviation-accent" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">公司总部</h3>
                  <p className="text-slate-400">{COMPANY_ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-950 p-8 rounded-lg border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-6">发送消息</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">姓名</label>
                  <input type="text" id="name" className="w-full bg-aviation-900 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-aviation-accent focus:ring-1 focus:ring-aviation-accent" placeholder="您的姓名" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">电话</label>
                  <input type="tel" id="phone" className="w-full bg-aviation-900 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-aviation-accent focus:ring-1 focus:ring-aviation-accent" placeholder="联系电话" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">邮箱</label>
                <input type="email" id="email" className="w-full bg-aviation-900 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-aviation-accent focus:ring-1 focus:ring-aviation-accent" placeholder="example@company.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">留言内容</label>
                <textarea id="message" rows={4} className="w-full bg-aviation-900 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-aviation-accent focus:ring-1 focus:ring-aviation-accent" placeholder="请描述您的需求..."></textarea>
              </div>

              <Button fullWidth className="flex items-center justify-center">
                <Send className="h-4 w-4 mr-2" /> 发送消息
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};