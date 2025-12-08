// Cette interface définit de façon précise les informations relatives à un employé
export interface Employe{
    nom:string;
    prenom:string;
    dateNaissance:Date;
    salaire:number;
    sympa?:boolean;
}