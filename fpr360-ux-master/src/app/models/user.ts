import { Company } from './company';
import { Role } from './role';

export enum UserCompanyStatus {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export interface UserCompany extends Company {
    status: UserCompanyStatus;
}

export enum UserType {
    GURU = 'guru',
    CLIENT = 'client',
    PARTNER = 'partner'
}

export interface UserIcon {
    avatar?: string;
    color?: string;
    initials?: string;
}

export interface User {
    id: string;
    name: string;
    icon: UserIcon;
    active?: boolean;       //TODO: Make required BUT then need to handle user-dialog
}

// A Guru user is a Chargeback Gurus Employee
export interface GuruUser extends User { 
    role: Role;
    email?: string;
    phone_1?: string;
    phone_2?: string;
    companyList?: UserCompany[];
}

// An external user are non-Chargeback Guru employee, such as a client
// or a partner user.
export interface ExternalUser extends User {
    company?: Company,
    work?: string;
    ext?: string;
    mobile?: string;
    email?: string;
    contact: boolean;
    skypeId?: string;
}

// A Client user is a user account created for our clients so that they can
// generate their reports and manage some services on their own.
export interface ClientUser extends ExternalUser {
}

// A Partner user is a user account created for our partners (resellers, processors,
// someone who brings in multiple clients to us at once; i.e., a group of clients). 
// Some partners will have enlisted our services while other partners will have a
// courtesy login.
export interface PartnerUser extends ExternalUser {
}
