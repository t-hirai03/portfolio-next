'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Project = {
  name: string;
  technologies: string;
  url: string;
};

const projects: Project[] = [
  {
    name: 'スターペイント 見積もりチャットボット',
    technologies: 'Next.js TypeScript',
    url: 'https://estimate.starpaint.jp/',
  },
  {
    name: '利回りくん 奈義町プロジェクト',
    technologies: 'Next.js TypeScript',
    url: 'https://rimawarikun.com/lp/nagicho/',
  },
  {
    name: '利回りくん 高野山プロジェクト',
    technologies: 'Rails',
    url: 'https://rimawarikun.com/donations/projects/koyasan/',
  },
  {
    name: '利回りくん 100億円キャンペーンLP',
    technologies: 'Rails',
    url: 'https://rimawarikun.com/lp/10b_202412_cp/',
  },
  {
    name: 'スターペイント FCサイトLP',
    technologies: 'WordPress original theme',
    url: 'https://fc.starpaint.jp/',
  },
  {
    name: '栃木ミサワ',
    technologies: 'Astro',
    url: 'https://tg-misawawork.sakura.ne.jp/nasuworkation/',
  },
  {
    name: '中日地質',
    technologies: 'Astro',
    url: 'https://chunichi-chishitsu.com/',
  },
  {
    name: '小畑製紙所',
    technologies: 'Astro',
    url: 'https://obataseishijo.jp/',
  },
  {
    name: '地球科学総合研究所',
    technologies: 'WordPress original theme',
    url: 'https://jgi-inc.com/',
  },
  {
    name: 'オーディオブレインズ beyerdynamic',
    technologies: 'WordPress original theme',
    url: 'https://beyerdynamic.co.jp/',
  },
  {
    name: 'カラヤ三協',
    technologies: 'WordPress original theme',
    url: 'https://karayasankyo.com/',
  },
  {
    name: 'カネキ運輸',
    technologies: 'WordPress original theme',
    url: 'https://kaneki-unyu.co.jp/',
  },
  {
    name: '高善産業',
    technologies: 'WordPress original theme',
    url: 'https://takazen-sangyo.com/',
  },
  {
    name: '神奈川工科大企画',
    technologies: 'html, css, js',
    url: 'https://kait-ext.securesite.jp/company/index.html',
  },
];

export const ProjectsTable = () => {
  return (
    <div className='min-h-[100vh] flex-1 rounded-xl border p-4 md:min-h-0'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[300px]'>サイト名</TableHead>
            <TableHead>使用技術</TableHead>
            <TableHead>URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.name}>
              <TableCell className='font-medium'>{project.name}</TableCell>
              <TableCell>{project.technologies}</TableCell>
              <TableCell>
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline'
                >
                  {project.url}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
