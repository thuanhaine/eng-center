import "./Courses.scss";
import FromCreateCourses from "./form-create/CreateCourses";
import { PlusOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
function Courses() {
  const [addCourse, setAddCourse] = useState(false);
  const [listCourses, setListCourses] = useState([]);
  const [coursesNumber, setCourseNumber] = useState(8);
  const [isAdmin, setIsAdmin] = useState(false);
  const IdStored = localStorage.getItem("userId");
useEffect(() => {
  fetch(`http://localhost:3002/api/getOneUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({_id: IdStored}),
  })
    .then(res => res.json())
    .then(res => {
      if(res.role === 'Admin') {
        setIsAdmin(true);
      }
      else {
        setIsAdmin(false);
      }
    })
  }, []);


  useEffect(() => {
    fetch(`http://localhost:3002/api/get`)
      .then((res) => res.json())
      .then((res) => {
        const sortData = res.sort((a,b) => a.index - b.index)
        setListCourses(sortData);
        console.log(sortData)
      });
  }, []);

  return (
    <div className="courses">
      <div className="courses__header">
        <div className="courses__header--box">
          {isAdmin ? <p
            className="courses__header--box-text"
            onClick={() => setAddCourse(!addCourse)}
          >
            Thêm khóa học <PlusOutlined />
          </p> : <></>}
          
        </div>
        <div className="courses__header--from">
          {addCourse ? (
            <>
              <FromCreateCourses /> <div className="courses__header--box"></div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <ul className="courses__list">
        {listCourses.map((course, index) => {
          if (index < coursesNumber ) {
            return (
              <li className="courses__list-item" key={course._id}>
                <h2 className="courses__list-item--title">
                {course.code} - {course.name}
                </h2>
                <p className="courses__list-item--lecture">
                  Lecturer: {course.lecture}
                </p>
                <p className="courses__list-item--date">
                  Date start: {course.dateStart}
                </p>
                <p className="courses__list-item--student">Student: {course.studentNumber}</p>

                  <button className="btn">Đăng ký</button>
              </li>
            );
          }
        })}
      </ul>
      <div className="courses__more">
        {coursesNumber >8 ? <button className="courses__more--btn" onClick={() => setCourseNumber(coursesNumber - 4)}> Ẩn bớt</button> : <></>}
        {listCourses.length  > 8 ? <button className="courses__more--btn" onClick={() => setCourseNumber(coursesNumber + 4)}>Xem thêm</button> : <></>}
        
      </div>
    </div>
  );
}

export default Courses;
