import { Content, ContentLang, ContentType, } from '@/models/content.model';
import SkillModel from '@/models/skill.model';
import { ApiServiceErrors } from '@/constants/errors';
import getEnvVariable from '@/utils/getEnvVariable';
import { ProjectModel } from '@/models/project.model';

const API_KEY = getEnvVariable('API_KEY');
const API_URL = getEnvVariable('API_URL');
const DATA_REVALIDATION_TIME = 3_600;

export async function getContent(type: ContentType, lang: ContentLang): Promise<Content> {
    const url = `${API_URL}/content/${type}/${lang}`;

    try {
        const response = await fetch(url, {
            headers: {
                'Api-key': API_KEY
            },
            next: {
                revalidate: DATA_REVALIDATION_TIME
            }
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Failed to fetch content!
                URL: ${url}, 
                Status: ${response.status}, 
                Status text: ${response.statusText}`);
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`${ApiServiceErrors.GET_CONTENT_ERROR} ${error.message}`);
        } else {
            throw new Error(String(error));
        }
    }


}

export async function getSkills(): Promise<SkillModel[]> {
    const url = `${API_URL}/skills`;

    try {
        const response = await fetch(url, {
            headers: {
                'Api-key': API_KEY
            },
            next: {
                revalidate: DATA_REVALIDATION_TIME
            }
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Failed to fetch skills! 
                URL: ${url}, 
                Status: ${response.status}, 
                Status text: ${response.statusText}`);
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`${ApiServiceErrors.GET_SKILLS_ERROR} ${error.message}`);
        } else {
            throw new Error(String(error));
        }
    }

}

export async function getAllProjects(): Promise<ProjectModel[]> {
    try {
        const response = await fetch(`${API_URL}/projects`, {
            headers: {
                'Api-key': API_KEY
            },
            next: {
                revalidate: DATA_REVALIDATION_TIME
            }
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`${response.status} ${response.statusText}`);
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`${ApiServiceErrors.GET_PROJECTS_ERROR} ${error.message}`);
        } else {
            throw new Error(String(error));
        }
    }
}

export async function getProject(id: string): Promise<ProjectModel> {
    try {
        const response = await fetch(`${API_URL}/projects/${id}`, {
            headers: {
                'API-KEY': API_KEY
            },
            next: {
                revalidate: DATA_REVALIDATION_TIME
            }
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`${ApiServiceErrors.GET_PROJECTS_ERROR} ${error.message}`);
        } else {
            throw new Error(String(error));
        }
    }

}