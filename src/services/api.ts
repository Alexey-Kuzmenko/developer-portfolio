import { Content, ContentLang, ContentType, } from '@/models/content.model';
import SkillModel from '@/models/skill.model';
import { ProjectModel } from '@/models/project.model';
import getEnvVariable from '@/utils/getEnvVariable';
import { throwCustomError } from '@/utils/throwCustomError';

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
            throwCustomError('getContent function', error.message);
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
            throwCustomError('getSkills function', error.message);
        } else {
            throw new Error(String(error));
        }
    }

}

export async function getAllProjects(): Promise<ProjectModel[]> {
    const url = `${API_URL}/projects`;

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
            throw new Error(`Failed to fetch projects! 
                URL: ${url}, 
                Status: ${response.status}, 
                Status text: ${response.statusText}`
            );
        }
    } catch (error) {
        if (error instanceof Error) {
            throwCustomError('getAllProjects function', error.message);
        } else {
            throw new Error(String(error));
        }
    }
}

export async function getProject(id: string): Promise<ProjectModel> {
    const url = `${API_URL}/projects/${id}`;

    try {
        const response = await fetch(url, {
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
            throw new Error(`Failed to fetch project! 
                URL: ${url}, 
                Status: ${response.status}, 
                Status text: ${response.statusText}`
            );
        }
    } catch (error) {
        if (error instanceof Error) {
            throwCustomError('getProject function', error.message);
        } else {
            throw new Error(String(error));
        }
    }

}