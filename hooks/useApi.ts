import LocalDataService from '@/services/localData';
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

// Generic hook for local data
function useJsonData<T>(selector: () => T) {
  try {
    const data = selector();
    return { data, loading: false, error: null, refetch: () => {} };
  } catch (err) {
    return {
      data: null,
      loading: false,
      error: err instanceof Error ? err.message : 'An error occurred',
      refetch: () => {}
    };
  }
}

// Specific hooks for each data section
export const usePortfolioData = () => 
  useJsonData<PortfolioData>(() => LocalDataService.getPortfolioData());

export const useIntro = () => 
  useJsonData<Intro>(() => LocalDataService.getIntro());

export const useAbout = () => 
  useJsonData<{ about: string }>(() => LocalDataService.getAbout());

export const useSkills = () => 
  useJsonData<Skills>(() => LocalDataService.getSkills());

export const useExperience = () => 
  useJsonData<Experience[]>(() => LocalDataService.getExperience());

export const useEducation = () => 
  useJsonData<Education[]>(() => LocalDataService.getEducation());

export const useProjects = () => 
  useJsonData<Project[]>(() => LocalDataService.getProjects());

export const useCertifications = () => 
  useJsonData<Certification[]>(() => LocalDataService.getCertifications());

export const useContact = () => 
  useJsonData<Contact>(() => LocalDataService.getContact());
