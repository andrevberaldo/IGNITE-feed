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

}

export default Chance;