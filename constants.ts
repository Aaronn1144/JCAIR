import { Category } from './types';

export const COMPANY_NAME = "金成航空";
export const COMPANY_TAGLINE = "智领苍穹 · 翼动未来";

// Contact Information
export const COMPANY_ADDRESS = "中国 · 石家庄 光谷金成科技园";
export const COMPANY_PHONE = "198 3313 7881";
export const COMPANY_EMAIL = "1052438570@qq.com";

// Product Data Hierarchy
export const DRONE_CATEGORIES: Category[] = [
  {
    id: 'fpv',
    title: '穿越机 FPV',
    subtitle: '极致速度与精准操控的完美结合',
    image: 'https://picsum.photos/800/600?random=1',
    items: [
      { 
        id: '5-inch-fpv', 
        name: '5寸 FPV 竞速版', 
        description: '专为竞赛设计的黄金尺寸，兼顾灵活性与动力。',
        image: 'https://picsum.photos/600/400?random=10',
        specs: ['轴距: 225mm', '续航: 5-8min', '最高时速: 180km/h']
      },
      { 
        id: '7-inch-fpv', 
        name: '7寸 FPV 远航版', 
        description: '长距离巡航的首选，稳定的飞行姿态。',
        image: 'https://picsum.photos/600/400?random=11',
        specs: ['轴距: 300mm', '续航: 15-20min', '载重: 1.5kg']
      },
      { 
        id: '11-inch-fpv', 
        name: '11寸 FPV 电影机', 
        description: '专业影视航拍，搭载大型摄影机。',
        image: 'https://picsum.photos/600/400?random=12',
        specs: ['轴距: 500mm', '续航: 12min', '载重: 2.5kg']
      },
      { 
        id: '13-inch-fpv', 
        name: '13寸 FPV 重载机', 
        description: '工业级重载穿越机，适应极端环境。',
        image: 'https://picsum.photos/600/400?random=13',
        specs: ['轴距: 650mm', '续航: 15min', '载重: 4kg']
      },
      { 
        id: '15-inch-fpv', 
        name: '15寸 FPV 巨兽', 
        description: '超大载重，极限物流运输解决方案。',
        image: 'https://picsum.photos/600/400?random=14',
        specs: ['轴距: 800mm', '续航: 20min', '载重: 6kg']
      },
    ]
  },
  {
    id: 'multi-rotor',
    title: '多旋翼',
    subtitle: '行业应用的稳定基石',
    image: 'https://picsum.photos/800/600?random=2',
    items: [
      {
        id: 'tethered-lighting',
        name: '应急系留照明无人机',
        description: '24小时不间断高空照明，适用于应急救援、夜间施工。',
        longDescription: '大功率空中照明解决方案，20万流明亮度。配备专用地面电源箱实现无限续航，包含系留线缆与智能收放系统，专为应急救援与夜间作业设计。',
        image: 'https://picsum.photos/600/400?random=20',
        specs: ['照明亮度: 200,000lm', '驻空时间: 无限', '抗风等级: ≤12m/s'],
        gallery: [
             'https://picsum.photos/600/400?random=21',
             'https://picsum.photos/600/400?random=22',
             'https://picsum.photos/600/400?random=23'
        ],
        highlights: [
            { label: '最大亮度', value: '200,000', unit: 'lm', icon: 'Sun' },
            { label: '抗风等级', value: '≤12', unit: 'm/s', icon: 'Wind' },
            { label: '地面供电', value: '无限', unit: '续航', icon: 'Zap' },
            { label: '载重能力', value: '5', unit: 'KG', icon: 'Box' },
        ],
        detailedSpecs: [
            {
                title: '飞机参数',
                subtitle: '高性能碳纤维机身',
                icon: 'Plane',
                items: [
                    { label: '机架类型', value: '四轴 X 型' },
                    { label: '材质', value: '碳纤维材质' },
                    { label: '轴距', value: '950mm' },
                    { label: '桨叶', value: '23 寸桨叶' },
                    { label: '飞行高度', value: '120米 (默认)' },
                    { label: '载重能力', value: '5KG' },
                    { label: '防护等级', value: 'IP54 (防雨雪沙尘)' },
                    { label: '抗风能力', value: '≤12m/s' },
                ]
            },
            {
                title: '系留天空端',
                subtitle: '宽电压自适应智能管理',
                icon: 'Cpu',
                items: [
                    { label: '尺寸', value: '103*53*50mm' },
                    { label: '重量', value: '380±10g' },
                    { label: '功率', value: '1500W Max' },
                    { label: '输入电压', value: '360-420Vdc' },
                    { label: '输出电压', value: '22.5-26.25Vdc' },
                    { label: '变比', value: '16:1 固定比' },
                    { label: '能量转化率', value: '92%' },
                ]
            },
            {
                title: '系留地面端',
                subtitle: '智能变频电源系统',
                icon: 'Server',
                items: [
                    { label: '类型', value: '2kW 智能变频电源' },
                    { label: '输入', value: '220Vac (2.2KW, 10A)' },
                    { label: '输出', value: '0-420Vdc 电压可调' },
                    { label: '线长', value: '50m 6A Max' },
                    { label: '保护机制', value: '过压/过流/短路 三重防护' },
                ]
            },
            {
                title: 'L800 照明灯',
                subtitle: 'COB集成光源 + 相变散热',
                icon: 'Lightbulb',
                items: [
                    { label: '光通量', value: '20万流明' },
                    { label: '散热技术', value: '相变散热 + COB' },
                    { label: '重量', value: '200g' },
                    { label: '尺寸', value: '200*35*25mm' },
                    { label: '功率', value: '80W (满载150W)' },
                    { label: '寿命', value: '50000 小时' },
                ]
            },
            {
                title: '系留线',
                subtitle: '凯夫拉纤维编织内芯',
                icon: 'Cable',
                items: [
                    { label: '线长', value: '50 米' },
                    { label: '内芯材质', value: '凯夫拉纤维编织' },
                    { label: '外层材质', value: '耐候性聚氨酯' },
                    { label: '特性', value: '解决低温易脆/高温软化' },
                ]
            },
             {
                title: '遥控器',
                subtitle: 'FreeRTOS系统 + LVGL界面',
                icon: 'Radio',
                items: [
                    { label: '通道', value: '16 通道 (3ms 响应)' },
                    { label: '屏幕', value: '2.8寸 LCD (320*240)' },
                    { label: '主频', value: '288MHz' },
                    { label: '交互', value: '2个VR旋钮 / 2个VR开关' },
                    { label: '回传', value: '内置数传 (电压/RSSI/位置)' },
                ]
            }
        ]
      }
    ]
  },
  {
    id: 'fixed-wing',
    title: '固定翼',
    subtitle: '长航时巡检与打击专家',
    image: 'https://picsum.photos/800/600?random=3',
    items: [
      {
        id: 'loitering-munition-x1',
        name: '巡飞弹-X1',
        description: '察打一体，高精度打击，单兵便携智能巡飞系统。',
        longDescription: 'X1型巡飞弹是专为单兵及班组战术设计的察打一体化系统。采用先进的折叠翼气动布局，发射后迅速展开，具备长航时侦察与即时打击能力。内置高性能AI芯片，支持自主目标识别与跟踪，配备多模导引头，确保在复杂电磁环境下仍能精准命中目标。',
        image: 'https://picsum.photos/600/400?random=55',
        specs: ['续航: 40min', '作战半径: 15km', '最大航速: 150km/h'],
        gallery: [
             'https://picsum.photos/600/400?random=56',
             'https://picsum.photos/600/400?random=57',
             'https://picsum.photos/600/400?random=58'
        ],
        highlights: [
            { label: '作战半径', value: '15', unit: 'km', icon: 'Radio' },
            { label: '最大航速', value: '150', unit: 'km/h', icon: 'Wind' },
            { label: '打击精度', value: '≤1', unit: 'm', icon: 'Box' },
            { label: '快速部署', value: '<2', unit: 'min', icon: 'Zap' },
        ],
        detailedSpecs: [
            {
                title: '飞行参数',
                subtitle: '高机动性折叠翼平台',
                icon: 'Plane',
                items: [
                    { label: '翼展', value: '1200mm (展开) / 150mm (折叠)' },
                    { label: '机身长度', value: '600mm' },
                    { label: '最大起飞重量', value: '3.5kg' },
                    { label: '巡航速度', value: '80-100km/h' },
                    { label: '最大俯冲速度', value: '180km/h' },
                    { label: '续航时间', value: '≥40分钟' },
                ]
            },
            {
                title: '任务载荷',
                subtitle: '光电导引与战斗部',
                icon: 'Cpu',
                items: [
                    { label: '传感器', value: '1080P可见光 + 640红外热成像' },
                    { label: '导引模式', value: '视觉/GPS/末端图像匹配' },
                    { label: '战斗部', value: '500g / 1kg 可选 (杀爆/破甲)' },
                    { label: '杀伤半径', value: '人员≥8m / 车辆≥3m' },
                ]
            },
            {
                title: '系统特性',
                subtitle: '智能化作战辅助',
                icon: 'Server',
                items: [
                    { label: '控制链路', value: 'AES-256 加密数字图传' },
                    { label: '抗干扰', value: '支持视觉导航 (无GPS环境)' },
                    { label: '发射方式', value: '单兵筒式气动发射' },
                    { label: '回收方式', value: '伞降回收 (侦察模式)' },
                ]
            }
        ]
      }
    ] 
  },
  {
    id: 'vtol',
    title: '垂起固定翼',
    subtitle: '垂直起降，巡航千里',
    image: 'https://picsum.photos/800/600?random=4',
    items: [
      {
        id: 'jade-rabbit',
        name: '玉兔 (Jade Rabbit)',
        description: '新一代复合翼垂起无人机，灵活部署，全域到达。',
        image: 'https://picsum.photos/600/400?random=30',
        specs: ['翼展: 2.4m', '巡航速度: 90km/h', '任务载荷: 多光谱/激光雷达']
      }
    ]
  }
];

export const SERVICE_ITEMS = [
  {
    title: '高端定制机架',
    description: '采用航空级碳纤维材料，为您定制专属飞行平台。',
    icon: 'Frame'
  },
  {
    title: '无人机租赁服务',
    description: '灵活的租赁方案，满足短期项目与测试需求。',
    icon: 'Briefcase'
  },
  {
    title: '技术支持与培训',
    description: '全方位的售后保障与专业飞手培训课程。',
    icon: 'Wrench'
  }
];