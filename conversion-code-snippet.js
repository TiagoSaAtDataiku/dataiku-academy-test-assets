if (typeof(skilljarCourse) !== 'undefined') {analytics.track('Course Registered',{'course_id':skilljarCourse.publishedCourseId,'course_title':skilljarCourse.title})}

analytics.ready(function() {
if(typeof skilljarUser !== 'undefined'){
 if(!analytics.user().traits().email){analytics.identify({'name': skilljarUser.name,'email':skilljarUser.email})};
}
});