# CaSMM - Project 4 - Group 4c

> Grading features

# AutoGrade (Still on `AutoGrade` branch)
- Run with `yarn start` in the client directory, then `docker compose up` in the main directory.

- Features include:
  - A new Grade Template for teachers to write their solutions.
    - ![Screen Shot 2023-12-05 at 12 29 59 PM](https://github.com/CEN3031-F23-Group4c/sapphire-project04-4c/assets/92874037/7e9d5108-8fb4-4873-bd09-f4493836d329)
  - AutoGrade enabling and disabling.
    - ![Screen Shot 2023-12-05 at 12 32 45 PM](https://github.com/CEN3031-F23-Group4c/sapphire-project04-4c/assets/92874037/7b23c177-7bef-4501-80c3-feb9665d70b0)
  - AutoGrade submission on student canvas.
    - ![Screen Shot 2023-12-05 at 12 31 44 PM](https://github.com/CEN3031-F23-Group4c/sapphire-project04-4c/assets/92874037/a1b8687e-e93d-4ad0-b914-c36921feb347)
  - Feedback messages to student.
    - ![Screen Shot 2023-12-05 at 12 32 06 PM](https://github.com/CEN3031-F23-Group4c/sapphire-project04-4c/assets/92874037/0dd12f52-f0e6-4512-ba50-b906d680521f)
  - A new `grade_in_class` feature for students thats updated with the students' submission.
    - ![Screen Shot 2023-12-05 at 12 34 12 PM](https://github.com/CEN3031-F23-Group4c/sapphire-project04-4c/assets/92874037/e1d8c72f-fd3d-4ed0-bd9d-fd34c7c65f6f)

- Outstanding Work
  - Integration with the main branch along with the feedback feature.
 
# Feedback System (Merged into `develop` branch)
- Run with `yarn start` in the client directory, then `docker compose up` in the main directory.

- Features include:
  - The ability for teachers and researchers to provide comments on student submissions.
    -  ![Teacher/researcher feedback view](https://github.com/CEN3031-F23-Group4c/sapphire-project04-4c/assets/11484046/b4fcf73b-831f-41f6-bf7d-5599b3a8a0ce)
  - The ability for students to view their feedback on specific assignments via a persistent "Show Feedback" button at the bottom of the screen.
    -  ![Student feedback modal](https://github.com/CEN3031-F23-Group4c/sapphire-project04-4c/assets/11484046/e4901c95-c57a-49cb-87a8-e92f501ed4bc)
  - A toast notification at the top of the student view when there are new comments they haven't viewed.
    -  ![Student toast message](https://github.com/CEN3031-F23-Group4c/sapphire-project04-4c/assets/11484046/cff565f6-4307-4da8-9cd4-7e087d33eebe)

- Outstanding Work
  - Integration with Strapi (currently using local browser storage) and the AutoGrade feature.

# Manual Grading (Merged into `develop` branch)
  - ![Screen Shot 2023-12-05 at 10 22 11 PM](https://github.com/CEN3031-F23-Group4c/sapphire-project04-4c/assets/73858107/d72926f0-8d36-48b9-86ed-469beed0af63)

# Automatic Code Compilation (Merged into `develop` branch)
![Screenshot (85)](https://github.com/CEN3031-F23-Group4c/sapphire-project04-4c/assets/100625630/36f314a3-d404-42e8-a7cc-a72585108bdf)

# Display Student Grade&Feedback (Current on local branch)
- This feature is to display student's grade and feedback on student's side
- Function to fetch student data from gradesData.json file, include date, assignment name, student's grade and teacher feedback.
- Also insert the data into the table.
![indi1](https://github.com/CEN3031-F23-Group4c/sapphire-project04-4c/assets/92874121/92fb16df-8716-49b3-ad3f-8bd2555d7f79)
- Content of gradesData.json file
![indi2](https://github.com/CEN3031-F23-Group4c/sapphire-project04-4c/assets/92874121/1ce66cc6-a9d8-4ff7-9128-050b33de630b)
- Html create grade&feedback table header and onclick 'grade' button.
![indi3](https://github.com/CEN3031-F23-Group4c/sapphire-project04-4c/assets/92874121/f29b53b8-818f-45c9-9d46-c51ef26e21e5)
![s2f2](https://github.com/CEN3031-F23-Group4c/sapphire-project04-4c/assets/92874121/f8a0c24f-7fb2-46a3-bfea-48a17bd7d065)









