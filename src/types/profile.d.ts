// Careerの型
export type Career = {
  title: string;
  Industry: string;
  period_of_employment: string;
  business_content: string;
};

// Projectの型
export type Project = {
  title: string;
  technology: string;
};

// Profileの型
export type Profile = {
  icon: {
    url: string;
    height: number;
    width: number;
  };
  name: string;
  furigana: string;
  date_of_birth: string;
  self_introduction: string;
  github: string;
  email: string;
  free_title: string;
  free_image: {
    url: string;
    height: number;
    width: number;
  };
  free_text: string;
  career: Career[];
  projects: Project[];
};

// APIレスポンスの型
export type ProfileResponse = {
  contents: Profile[];
  totalCount: number;
  offset: number;
  limit: number;
};
