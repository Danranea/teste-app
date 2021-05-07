export type CourseInform = {
    full_price: number,
    price_with_discount: number,
    discount_percentage: number,
    start_date: string,
    enrollment_semester: number,
    enabled: boolean,
    course: {
        name: string,
        kind: string,
        level: string,
        shift: string,
    }
    university: {
        name: string,
        score: number,
        logo_url: string,
    }
    campus: {
        name: string,
        city: string,
    }
}