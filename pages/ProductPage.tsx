import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DRONE_CATEGORIES, COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAIL } from '../constants';
import { ProductItem } from '../types';
import { ArrowLeft, Play, Sun, Wind, Zap, Box, Phone, Download, Cpu, Server, Lightbulb, Cable, Radio, Plane, MapPin } from 'lucide-react';
import { Button } from '../components/Button';

// Icon mapping helper
const getIcon = (iconName?: string) => {
  switch (iconName) {
    case 'Sun': return <Sun className="h-5 w-5" />;
    case 'Wind': return <Wind className="h-5 w-5" />;
    case 'Zap': return <Zap className="h-5 w-5" />;
    case 'Box': return <Box className="h-5 w-5" />;
    case 'Plane': return <Plane className="h-6 w-6 text-aviation-accent" />;
    case 'Cpu': return <Cpu className="h-6 w-6 text-aviation-accent" />;
    case 'Server': return <Server className="h-6 w-6 text-aviation-accent" />;
    case 'Lightbulb': return <Lightbulb className="h-6 w-6 text-aviation-accent" />;
    case 'Cable': return <Cable className="h-6 w-6 text-aviation-accent" />;
    case 'Radio': return <Radio className="h-6 w-6 text-aviation-accent" />;
    default: return <Box className="h-6 w-6 text-aviation-accent" />;
  }
};

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductItem | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    // Find product in categories
    for (const cat of DRONE_CATEGORIES) {
      const item = cat.items.find(i => i.id === id);
      if (item) {
        setProduct(item);
        setActiveImage(item.image);
        break;
      }
    }
    window.scrollTo(0, 0);
  }, [id]);

  const handleDownloadPdf = () => {
    if (!product) return;

    // Use specific PDF file if available
    if (product.pdfUrl) {
        const link = document.createElement('a');
        link.href = product.pdfUrl;
        link.download = product.pdfUrl.split('/').pop() || `${product.id}_specs.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
    }
    
    // Fallback: Create a dummy PDF text content
    const content = `
    JINCHENG AVIATION - PRODUCT SPECIFICATION SHEET
    ------------------------------------------------
    Product: ${product.name}
    Description: ${product.description}
    
    TECHNICAL SPECIFICATIONS:
    -------------------------
    ${product.detailedSpecs?.map(group => `
    [${group.title}]
    ${group.items.map(item => `${item.label}: ${item.value}`).join('\n    ')}
    `).join('\n') || 'Refer to website for details.'}
    
    -------------------------
    Contact Us:
    Phone: ${COMPANY_PHONE}
    Email: ${COMPANY_EMAIL}
    Address: ${COMPANY_ADDRESS}
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${product.id}_specs.txt`; 
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-aviation-900 pt-20 flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-aviation-900 pt-20">
      
      {/* Breadcrumb / Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm">
          <ArrowLeft className="h-4 w-4 mr-2" /> 返回主页
        </Link>
      </div>

      {/* Hero Section: Video + Key Specs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Media */}
          <div className="space-y-4">
            {/* Main Video/Image Display */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-slate-800 shadow-2xl group">
               {product.video ? (
                 <video 
                   controls 
                   className="w-full h-full object-cover"
                   poster={product.image}
                 >
                   <source src={product.video} type="video/mp4" />
                   您的浏览器不支持视频播放。
                 </video>
               ) : (
                 <>
                   <img src={activeImage || product.image} alt={product.name} className="w-full h-full object-cover" />
                   {/* Optional: Add a 'No Video' placeholder or just show image */}
                   <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 to-transparent"></div>
                 </>
               )}
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
               {product.gallery?.map((img, idx) => (
                  <div 
                    key={idx} 
                    className={`aspect-video rounded border ${activeImage === img ? 'border-aviation-accent' : 'border-slate-800'} overflow-hidden cursor-pointer hover:opacity-80 transition-all`}
                    onClick={() => setActiveImage(img)}
                  >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </div>
               ))}
               {!product.gallery && (
                 <>
                    <div className="aspect-video bg-slate-800 rounded border border-aviation-accent overflow-hidden"><img src={product.image} className="w-full h-full object-cover" /></div>
                    <div className="aspect-video bg-slate-800 rounded border border-slate-700"></div>
                 </>
               )}
            </div>
          </div>

          {/* Right: Info & Highlights */}
          <div className="flex flex-col justify-center">
             <div className="flex space-x-2 mb-4">
               <span className="bg-aviation-accent px-2 py-1 rounded text-xs font-bold text-white uppercase tracking-wider">金成航空旗舰产品</span>
               <span className="bg-slate-700 px-2 py-1 rounded text-xs font-bold text-white uppercase tracking-wider">IP54 防护</span>
             </div>
             
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{product.name}</h1>
             <p className="text-xl text-slate-500 font-light mb-6">High Performance Aviation System</p>
             
             <p className="text-slate-300 leading-relaxed mb-8">
               {product.longDescription || product.description}
             </p>

             {/* Highlight Grid */}
             {product.highlights && (
               <div className="grid grid-cols-2 gap-4 mb-10">
                 {product.highlights.map((h, i) => (
                   <div key={i} className="bg-slate-800/40 border border-slate-700 p-4 rounded-lg flex flex-col justify-between hover:border-aviation-accent/30 transition-colors">
                      <div className="flex items-center text-aviation-accent mb-2">
                        {getIcon(h.icon)}
                        <span className="ml-2 text-xs font-medium text-slate-400">{h.label}</span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {h.value} <span className="text-sm font-normal text-slate-500">{h.unit}</span>
                      </div>
                   </div>
                 ))}
               </div>
             )}

             <div className="flex space-x-4 mt-auto">
               <Link to="/contact" className="flex-1">
                 <Button fullWidth className="h-12 flex items-center justify-center space-x-2">
                   <Phone className="h-5 w-5" />
                   <span>联系销售</span>
                 </Button>
               </Link>
               <Button variant="outline" className="h-12 flex items-center justify-center space-x-2 px-8" onClick={handleDownloadPdf}>
                 <Download className="h-5 w-5" />
                 <span>下载参数表 (PDF)</span>
               </Button>
             </div>
             <p className="mt-4 text-xs text-slate-500 flex items-center">
               <MapPin className="h-3 w-3 mr-1" /> {COMPANY_ADDRESS}
             </p>
          </div>
        </div>
      </div>

      {/* Technical Specifications Section */}
      {product.detailedSpecs && (
        <div className="bg-slate-950 py-24 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-2">技术参数详情</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-aviation-accent to-transparent mx-auto rounded-full"></div>
              <p className="text-slate-500 mt-4">Technical Specifications</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.detailedSpecs.map((group, idx) => (
                <div key={idx} className="bg-aviation-900 border border-slate-800 rounded-xl p-6 hover:border-aviation-accent/30 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 mr-4">
                       {getIcon(group.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{group.title}</h3>
                      {group.subtitle && <p className="text-xs text-slate-500">{group.subtitle}</p>}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {group.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-center py-2 border-b border-dashed border-slate-800 last:border-0">
                        <span className="text-sm text-slate-400">{item.label}</span>
                        <span className="text-sm font-medium text-slate-200">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};