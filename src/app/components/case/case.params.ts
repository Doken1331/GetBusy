export type TPrice = 'low' | 'middle' | 'high';

export type IPrice = {
    [key in TPrice]: {
        min: number;
        max: number;
    };
};

export const price: IPrice = {
    'low': {
        min: 0,
        max: 0.2,
    },
    'middle': {
        min: 0.3,
        max: 0.6,
    },
    'high': {
        min: 0.7,
        max: 1,
    },
};