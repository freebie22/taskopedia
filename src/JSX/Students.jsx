export default function Students()
{
  const fullName = "Kris Walley";
  const programmingExp = 3;
  return(
    <div className="container p-4">
        <div className="row">Students Enrolled</div>
        <div className="row border">
          <div className="col-2">
            <img className="w-100" src={`https://ui-avatars.com/api/?name=${fullName}`} alt=""/>
          </div>
          <div className="col-10">
            {fullName}<br/>
            Programming Experience - {programmingExp} years
          </div>
        </div>
    </div>
  );
}