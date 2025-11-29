import React from 'react';
import { Rocket, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { COMPANY_NAME, COMPANY_TAGLINE, COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAIL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 text-white mb-4">
              <Rocket className="h-6 w-6 text-aviation-accent" />
              <span className="text-xl font-bold">{COMPANY_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              {COMPANY_TAGLINE} <br/>
              致力于为全球客户提供顶尖的无人机解决方案、定制机架及专业租赁服务。
            </p>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-aviation-accent transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-aviation-accent transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-aviation-accent transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">产品中心</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/category/fpv" className="hover:text-white transition-colors">穿越机 FPV</a></li>
              <li><a href="#/category/multi-rotor" className="hover:text-white transition-colors">多旋翼无人机</a></li>
              <li><a href="#/category/vtol" className="hover:text-white transition-colors">垂起固定翼</a></li>
              <li><a href="#/frames" className="hover:text-white transition-colors">定制机架</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">服务支持</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/leasing" className="hover:text-white transition-colors">租赁服务</a></li>
              <li><a href="#" className="hover:text-white transition-colors">技术支持</a></li>
              <li><a href="#" className="hover:text-white transition-colors">软件下载</a></li>
              <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">联系方式</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-aviation-accent flex-shrink-0" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-aviation-accent flex-shrink-0" />
                <span>{COMPANY_PHONE}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-aviation-accent flex-shrink-0" />
                <span>{COMPANY_EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME} All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">隐私政策</a>
            <a href="#" className="hover:text-white">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};