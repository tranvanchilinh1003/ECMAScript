'use strict';

class APICaller {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(endpoint) {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`);
            const data = await response.json();
            // return data;
            console.log(data);
        } catch (error) {
            console.error('Lỗi:', error);
            throw error;
        }
    }
}

class User extends APICaller {
    constructor(baseUrl) {
        super(baseUrl);
    }           
    async getAll() {
        try {
            const students = await this.get('students');
            return students;
        } catch (error) {
            console.error('Lỗi khi lấy danh sách sinh viên:', error);
            throw error;
        }
    }
    async getOne(studentId) {
        try {
            const student = await this.get(`students/${studentId}`);
            return student;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin sinh viên:', error);
            throw error;
        }
    }
}
const apiUrl = 'https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10';
// const apiCaller = new APICaller(apiUrl);
// apiCaller.get('students');

const userService = new User(apiUrl);
// lấy thông tin sinh viên có id 5;
console.log(`Thông tin sinh viên có id 9 ${userService.getOne(9)}`);
// lấy tất thông tin
console.log(`Tất cả thông tin ${userService.getAll()}`);