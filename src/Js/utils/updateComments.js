const updateComments = async (
    idMeal,
    getComments,
    commentsContainer,
    numberOfCommentsContainer,
    commentsCounter,
    createTableRow,
    commentsObject,
  ) => {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/a2VutWNLP515ay0nBLQw/comments/?item_id=${idMeal}`;
  
    const allComments = await getComments(url);
  
    if (!allComments.error) {
      commentsContainer.innerHTML = '';
      commentsContainer.appendChild(
        createTableRow('headerRow', 'Date', 'Name', 'Comment'),
      );
      commentsObject.numberOfComments = commentsCounter(allComments);
  
      allComments.forEach((each) => {
        numberOfCommentsContainer.textContent = `Comments(${commentsObject.numberOfComments})`;
        commentsContainer.appendChild(
          createTableRow('row', each.creation_date, each.username, each.comment),
        );
      });
    } else {
      commentsContainer.innerHTML = '';
      numberOfCommentsContainer.innerHTML = 'Comments(0)';
    }
};
  
export default updateComments;
  