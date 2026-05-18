import portfolioData from '@/data/portfolio-data.json';
import {
  PortfolioData,
  Intro,
  Skills,
  Experience,
  Education,
  Project,
  Certification,
  Contact
} from '@/types';

class LocalDataService {
  static getPortfolioData(): PortfolioData {
    return portfolioData as PortfolioData;
  }

  static getIntro(): Intro {
    return portfolioData.intro;
  }

  static getAbout(): { about: string } {
    return { about: portfolioData.about };
  }

  static getSkills(): Skills {
    return portfolioData.skills;
  }

  static getExperience(): Experience[] {
    return portfolioData.experience;
  }

  static getEducation(): Education[] {
    return portfolioData.education;
  }

  static getProjects(): Project[] {
    return portfolioData.projects;
  }

  static getCertifications(): Certification[] {
    return portfolioData.certifications;
  }

  static getContact(): Contact {
    return portfolioData.contact;
  }
}

export default LocalDataService;
