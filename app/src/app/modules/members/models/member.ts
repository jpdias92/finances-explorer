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
    occupation: string;
    professional_qualifications: string;
    father_id: string;
    mother_id: string;

    public static map(data: any): Member[] {

        return data.map((member: any) => {
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
                occupation: member.occupation,
                professional_qualifications: member.professional_qualifications,
                father_id: member.father_id,
                mother_id: member.mother_id,
            };
        });
    }


}
