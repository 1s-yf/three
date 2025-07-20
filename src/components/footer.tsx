import { Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-red-500 mb-4">三下乡活动</h3>
            <p className="text-gray-300 mb-4">
              深入基层，服务人民，在实践中成长，在奉献中收获。
              我们用青春和热情，为乡村振兴贡献自己的力量。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-red-500 transition-colors">
                  关于我们
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-500 transition-colors">
                  活动花絮
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-red-500 transition-colors">
                  视频回顾
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-red-500 transition-colors">
                  时间轴
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>邮箱: three-rural@university.edu.cn</li>
              <li>电话: +86 123-4567-8900</li>
              <li>地址: XX大学学生工作部</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with 
            <Heart className="w-4 h-4 mx-1 text-red-500" /> 
            by 三下乡志愿者团队 © 2024
          </p>
        </div>
      </div>
    </footer>
  );
}