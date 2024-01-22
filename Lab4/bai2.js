'use strict'

async function fetchUrls(urls){
    const result = [];
    for(const url of urls){
        const res = await axios.get(url);
        result.push(res);
    }
    return result;
}
// Sử dụng vòng lặp for...of để duyệt qua từng URL một cách tuần tự.
// Gọi axios.get(url) cho mỗi URL và chờ đợi kết quả trước khi tiếp tục vòng lặp.
// Dùng await để đảm bảo rằng mỗi yêu cầu sẽ hoàn thành trước khi bắt đầu yêu cầu tiếp theo.



async function fetchUrlsParallel(urls){
    const result = await Promise.all(
urls.map(function(url){
return axios.get(url);

})
    );
    return result;
}


// Sử dụng Promise.all để gửi nhiều yêu cầu một cách song song
// Sử dụng urls.map để tạo một mảng các promises từ axios.get(url) cho mỗi URL.
// Tất cả các promises này sẽ được thực hiện cùng một lúc thông qua Promise.all.
// Kết quả trả về sẽ là một mảng các kết quả từ tất cả các yêu cầu, theo thứ tự của mảng urls.