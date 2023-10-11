$(document).ready(function () {

  $('form').on('submit', function (event) {
    event.preventDefault();
    // console.log('event', event);
    $.ajax({
      url: 'https://www.reddit.com/r/labrador/top.json?limit=10&t=year',
      method: 'GET'
    })
      .then(function (response) {
        //      console.log('response.data.children', response.data.children);
        const tableHTML = `<table></table>`;
        const $newTable = $(tableHTML);
        const $tableBody = $('<tbody id="table-body"><tr><th>Title</th><th>Author</th></tr></tbody>');
        for (let post of response.data.children) {
          console.log('post.data.title', post.data.title);
          $tableBody.append(`<tr><td><a href="https://old.reddit.com${post.data.permalink}" target="_blank">${post.data.title}</a></td><td>${post.data.author}</td></tr>`);
        }
        $newTable.append($tableBody);
        $('#display').append($newTable);
      })
      .catch(function (error) {
        console.log('error', error);
      });
  });
});
