import React from 'react';
import ServicesCard from '../components/servicesCard';
const imgWord = '/word.png'
const imgExcel = '/excel.png'
const imgToDo = '/todo.svg'

const OurServices = () => {
  return (
    <main className="container-lg p-6 mt-20  max-h-screen">
      <div className="text-left mt-32 mb-6">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="mt-2 text-base ">
          Welcome to our suite of online productivity tools designed to streamline your workflow and enhance your productivity. At OnlineDocs, we offer a range of powerful and intuitive online applications to meet your document creation, data analysis, and task management needs.
        </p>
      </div>

      <div className="flex flex-wrap justify-center -mx-4 ">
        <ServicesCard redirectPath="/docs" imgPath={imgWord} serviceName="Online Word" desc="Create, edit, and collaborate on documents with ease. Our online word processing tool offers rich features, real-time collaboration, and version history tracking for efficient document management." />
        <ServicesCard redirectPath="/sheet" imgPath={imgExcel} serviceName="Online Spreadsheet" desc="Effortlessly manage and analyze data with powerful features including formulas, charts, and pivot tables. Our online spreadsheet tool empowers you to organize data, visualize insights, and make informed decisions." />
        <ServicesCard redirectPath="/todo" imgPath={imgToDo} serviceName="Online To-Do" desc="Stay organized and focused with our intuitive to-do list management tool. Prioritize tasks, set due date reminders, and track progress seamlessly, whether managing personal projects or coordinating team tasks." />

      </div>z
    </main>
  );
};

export default OurServices;
