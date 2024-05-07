<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>
                    Student
                    <RouterLink to="/students/create" class="btn btn-primary float-end"> Add Student</RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="this.students.length > 0" >
                        <tr v-for="(student, index) in this.students" :key="index">
                            <td>{{ student.id }}</td>
                            <td>{{ student.name }}</td>
                            <td>{{ student.course }}</td>
                            <td>{{ student.email }}</td>
                            <td>{{ student.phone }}</td>
                            <td>{{ student.created_at}}</td>
                            <td>{{ student.action}}</td>
                            <RouterLink to="/student/edit" class="btn btn-success"> Edit</RouterLink>
                            <RouterLink to="/student/delete" class="btn btn-danger"> Delete</RouterLink>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="7">Loading...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name : 'students',
    data(){
        return {
            students : []
        }
    },
    mounted(){
        // console.log('I am here')
    },
    methods : {
        getStudents(){
            axios.get().then(res => {
            });
        }
    }
}
</script>