import { MembersInsertComponent } from '../components/members-insert/members-insert.component';

export class Member {
    id: string;
    title: string;
    name: string;
    gender: string;
    nationality: string;
    birth_date: Date;
    death_date: Date;
    street_name: string;
    door_number: string;
    flat: string;
    postal_code: string;
    city: string;
    contact1: string;
    contact2: string;
    email: string;
    baptism_date: Date;
    communion_date: Date;
    confirmation_date: Date;
    marital_status: string;
    partner_id: string;
    partner_name: string;
    occupation: string;
    professional_qualifications: string;
    father_id: string;
    father_name: string;
    mother_id: string;
    mother_name: string;

    public static map(data: any): Member[] {

        return data.map((member: any) => {

            var partner: Member = data.find(m => m.member_id == member.partner_id);
            var partner_name_aux = mother ? partner.name : null;

            var father: Member = data.find(m => m.member_id == member.father_id);
            var father_name_aux = father ? father.name : null;

            var mother: Member = data.find(m => m.member_id == member.mother_id);
            var mother_name_aux = mother ? mother.name : null;

            return {
                id: member.member_id,
                title: member.title,
                name: member.name,
                gender: member.gender,
                nationality: member.nationality,
                birth_date: member.birth_date,
                death_date: member.death_date,
                street_name: member.street_name,
                door_number: member.door_number,
                flat: member.flat,
                postal_code: member.postal_code,
                city: member.city,
                contact1: member.contact1,
                contact2: member.contact2,
                email: member.email,
                baptism_date: member.baptism_date,
                communion_date: member.communion_date,
                confirmation_date: member.confirmation_date,
                marital_status: member.marital_status,
                partner_id: member.partner_id,
                partner_name: partner_name_aux,
                occupation: member.occupation,
                professional_qualifications: member.professional_qualifications,
                father_id: member.father_id,
                father_name: father_name_aux,
                mother_id: member.mother_id,
                mother_name: mother_name_aux,
            };
        });
    }

}
