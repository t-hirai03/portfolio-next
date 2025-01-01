import { useEffect, useState } from 'react';
import { Project, ProjectsResponse } from 'src/types/project';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_MICROCMS_API_BASE_URL}/projects`, {
          headers: {
            'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data: ProjectsResponse = await res.json();
        setProjects(data.contents);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProjects();
  }, []);

  return { projects };
};
