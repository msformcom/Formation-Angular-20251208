export interface EmployeDTO {
    name: string;
    surname: string;
    salary: {
        amount: number;
        periodicity: string;
    };
    birthDate: string;
    cool?: boolean;
};