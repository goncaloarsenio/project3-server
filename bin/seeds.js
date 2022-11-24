const mongoose = require('mongoose');
const Course = require('../models/Courses.model');

const MONGO_URI = 'mongodb://127.0.0.1:27017/project3-server';

const courses = [
  {
    name: 'HoverCat',
    type: 'hoveatom',
    description: 'hoverinoz',
    duration: 1,
  },
  {
    name: 'Hover2Cat',
    type: 'hovercatom',
    description: 'hove2rinoz',
    duration: 12,
  },
];


async function seeds() {
  try {
    const x = await mongoose.connect(MONGO_URI);
    console.log(`Connected to: ${x.connections[0].name}`);

    const created = await Course.create(courses);

    console.log(`Successfuly created ${created.length}`);

    x.disconnect();
  } catch (error) {
    console.log(error);
  }
}

seeds();
