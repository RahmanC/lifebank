
export interface Record {
    id: number,
    firstName: number,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    birthDate: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string
}

export type Action = {
    type: string,
    payload?: boolean
  }

 