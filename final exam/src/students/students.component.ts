// students.component.ts

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: any[] = [];
  student: any = {};
  showForm: boolean = false;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    // Load all students when component initializes
    this.loadStudents();
  }

  // Load all students
  loadStudents() {
    this.studentService.getAllStudents().subscribe(
      (data: any) => {
        this.students = data;
      },
      (error) => {
        console.error('Error loading students:', error);
      }
    );
  }

  // Create a new student
  createStudent() {
    this.student = {};
    this.showForm = true;
  }

  // Edit a student
  editStudent(student: any) {
    this.student = { ...student };
    this.showForm = true;
  }

  // Save student (Create or Update)
  saveStudent() {
    if (!this.student.id) {
      // Create a new student
      this.studentService.createStudent(this.student).subscribe(
        () => {
          this.loadStudents(); // Reload students after creating a new one
          this.showForm = false;
        },
        (error) => {
          console.error('Error creating student:', error);
        }
      );
    } else {
      // Update an existing student
      this.studentService.updateStudent(this.student.id, this.student).subscribe(
        () => {
          this.loadStudents(); // Reload students after updating
          this.showForm = false;
        },
        (error) => {
          console.error('Error updating student:', error);
        }
      );
    }
  }

  // Delete a student
  deleteStudent(studentId: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(studentId).subscribe(
        () => {
          this.loadStudents(); // Reload students after deleting
        },
        (error) => {
          console.error('Error deleting student:', error);
        }
      );
    }
  }

}
