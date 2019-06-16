export class Category {
    id: string;
    name: string;

    public static map(data: any): Category[] {
        return data.map((category: any) => {
            return {
            id: category.category_id,
            name: category.name
            };
        });
    }
}
