import {faker} from '@faker-js/faker';

const Chance = {
    fullName() {
        return faker.name.fullName();
    },
    name() {
        return faker.name.firstName();
    },
    content(numberOfRows) {
        return faker.lorem.lines(numberOfRows);
    },
    avatar() {
        return faker.image.avatar();
    },
    background(){
        return faker.image.abstract();
    },
    job(){
        return faker.name.jobTitle();
    },
    int() {
        return faker.datatype.number();
    },
    word() {
        return faker.lorem.word();
    }
}

export default Chance;