interface Person {
  name: string;
}

interface Student extends Person {
  age: number;
}

interface postGrad extends Person {
  age: number;
  subject: string[];
}

// type StudentInfo<T extends Student = Student> = {
//   data: T;
//   grades: number[];
// };

interface StudentInfo<T extends Student = Student> {
  data: T;
  grades: number[];
}

export default function play() {
  function logStudentInfo(info: StudentInfo<postGrad>) {
    console.log(info.data.name);
    console.log(info.data.age);
    console.log(info.data.subject);
  }
  const info = {
    data: {
      name: "jame",
      age: 20,
    },
    grades: [1, 2, 3],
  };

  logStudentInfo(info);
}
