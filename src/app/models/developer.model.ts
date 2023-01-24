import { Skill } from "./skill.model";

export class developer {
    constructor(
        public lastnNme: string,
        public firstName: string,
        public age: number,
        public gender: "male" | "female",
        public bio: string,
        public skill: Skill
    ) { }
}