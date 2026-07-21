// ================================================================
// ข้อมูลผลงานทั้งหมด — แก้หรือเพิ่มผลงานที่ไฟล์นี้ไฟล์เดียว
// วิธีเพิ่มผลงาน: คัดลอก object หนึ่งชุด วางต่อท้าย แล้วแก้ข้อมูลภายใน
// รูปภาพเก็บไว้ในโฟลเดอร์ assets และใช้ path เช่น assets/project-10.webp
// ================================================================

const PROJECTS = [
  {
    "id": "ofos-isan",
    "number": "01",
    "title": "ค่าย OFOS Next Frame — หนังอีสาน",
    "role": "Director",
    "type": "Short Film / Regional Story",
    "format": "Film / Video Production",
    "image": "assets/project-01.webp",
    "description": "โปรเจกต์ภาพยนตร์สั้นจากค่าย OFOS Next Frame ที่นำเสนอเรื่องราวและบรรยากาศแบบอีสาน โดยผมรับผิดชอบการกำกับภาพรวมตั้งแต่การพัฒนาแนวคิด การเตรียมงาน จนถึงการถ่ายทำจริง",
    "duties": [
      "วางแผนและกำกับการผลิต",
      "คัดเลือกและจัดหาโลเคชัน",
      "คัดเลือกนักแสดง",
      "พัฒนาแนวคิดและเขียนบท",
      "ควบคุมภาพรวมของผลงานให้เป็นไปตามเป้าหมายของโครงการ"
    ],
    "url": "https://www.youtube.com/watch?v=Nfhscrl5iTo",
    "gallery": [
      "assets/project-01.webp",
      "assets/bts-10.webp",
      "assets/bts-11.webp",
      "assets/project-05-gallery-1.jpg"
    ]
  },
  {
    "id": "advertising-project",
    "number": "02",
    "title": "โปรเจกต์โฆษณา",
    "role": "Director",
    "type": "Commercial / Advertising",
    "format": "Commercial Production",
    "image": "assets/project-02.webp",
    "description": "งานโฆษณาที่ฝึกการแปลงแนวคิดให้เป็นภาพ วางจังหวะการเล่าเรื่อง และประสานการทำงานของทีมให้สอดคล้องกันตลอดกระบวนการผลิต",
    "duties": [
      "กำกับภาพรวมการผลิตตามแนวคิดของโครงการ",
      "พัฒนาแนวคิดและเขียนบทภาพยนตร์",
      "วางแผนลำดับการถ่ายทำ",
      "กำกับการแสดงของนักแสดง",
      "ประสานงานกับทีมงานทุกฝ่าย"
    ],
    "url": "https://www.youtube.com/watch?v=_oOxiBekvUk",
    "gallery": [
      "assets/project-02.webp",
      "assets/project-04-gallery-2.jpg",
      
    
    ]
  },
  {
    "id": "ofos-action",
    "number": "03",
    "title": "ค่าย OFOS Next Frame — หนังแอ็กชัน",
    "role": "Camera Assistant",
    "type": "Action Film / Camera Department",
    "format": "Film / Camera Department",
    "image": "assets/project-03.webp",
    "description": "ประสบการณ์ใน Camera Department ของกองถ่ายหนังแอ็กชัน ซึ่งต้องทำงานอย่างแม่นยำ รวดเร็ว และสื่อสารกับผู้กำกับภาพและทีมกล้องอย่างต่อเนื่อง",
    "duties": [
      "เตรียมและตรวจสอบอุปกรณ์กล้องก่อนถ่ายทำ",
      "ติดตั้งและดูแลกล้องรวมถึงอุปกรณ์เสริม",
      "ช่วยเปลี่ยนเลนส์และตั้งค่าอุปกรณ์ตามความต้องการของผู้กำกับภาพ",
      "ดูแลแบตเตอรี่ เมมโมรีการ์ด และอุปกรณ์ที่เกี่ยวข้อง",
      "ประสานงานกับผู้กำกับภาพและทีมงานเพื่อให้การถ่ายทำราบรื่น"
    ],
    "url": "https://www.youtube.com/watch?v=-A8LKJcPT2E&t=2s",
    "gallery": [
      "assets/project-03.webp",
      "assets/bts-07.webp",
      "assets/bts-08.webp",
      "assets/bts-09.webp"
    ]
  },
  {
    "id": "short-clip",
    "number": "04",
    "title": "งานถ่ายคลิปสั้น",
    "role": "Actor",
    "type": "Short-form Video",
    "format": "Short-form Content",
    "image": "assets/project-04.webp",
    "description": "การลองทำงานในบทบาทนักแสดงช่วยให้ผมเข้าใจมุมมองของผู้ที่อยู่หน้ากล้อง และเห็นความสำคัญของการสื่อสารระหว่างนักแสดง ผู้กำกับ และทีมกล้อง",
    "duties": [
      "รับบทนักแสดงในคลิปสั้น",
      "ทำความเข้าใจบทและทิศทางการแสดง",
      "เรียนรู้การทำงานร่วมกับผู้กำกับและทีมกล้อง"
    ],
    "url": "https://www.youtube.com/watch?v=NhWuvCCQI34",
    "gallery": [
      "assets/project-04.webp",
      "assets/project-17-gallery-1.jpg",
      "assets/project-17-gallery-2.jpg",
      "assets/project-17-gallery-3.jpg"
    ]
  },
  {
    "id": "travel-location",
    "number": "05",
    "title": "คลิปเสนอสถานที่ท่องเที่ยว",
    "role": "Camera Operator 2",
    "type": "Travel Content",
    "format": "Location / Travel Video",
    "image": "assets/project-05.webp",
    "description": "คอนเทนต์แนะนำสถานที่ท่องเที่ยวที่เน้นการเก็บภาพบรรยากาศและรายละเอียดของพื้นที่ เพื่อถ่ายทอดเสน่ห์ของสถานที่ผ่านมุมกล้องที่ได้รับมอบหมาย",
    "duties": [
      "ถ่ายทำตามมุมกล้องที่ได้รับมอบหมาย",
      "เตรียมอุปกรณ์ให้พร้อมและสะดวกต่อการถ่ายทำ",
      "ประสานจังหวะการถ่ายทำกับทีมงาน"
    ],
    "url": "https://www.instagram.com/reel/DTXbCL_EvEF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "gallery": [
    
     
      
    ]
  },
  {
    "id": "official-mv",
    "number": "06",
    "title": "Official Music Video",
    "role": "Camera Assistant / Music Composer",
    "type": "Music Video",
    "format": "Music Video Production",
    "image": "assets/project-06.webp",
    "description": "โปรเจกต์มิวสิกวิดีโอที่ผมได้มีส่วนร่วมทั้งด้านทีมกล้องและดนตรี ทำให้เข้าใจความสัมพันธ์ระหว่างภาพ จังหวะ และอารมณ์ของเพลงมากขึ้น",
    "duties": [
      "เตรียมอุปกรณ์กล้องให้พร้อมต่อการถ่ายทำ",
      "สนับสนุนการทำงานของทีมกล้อง",
      "มีส่วนร่วมในบทบาทผู้แต่งเพลงของโปรเจกต์"
    ],
    "url": "https://www.youtube.com/watch?v=wlXUdG6TC_8",
    "gallery": [
      "assets/project-06.webp",
      "assets/project-11-gallery-1.jpg",
      "assets/project-11-gallery-3.jpg",
      
    ]
  },
  {
    "id": "bb-le-garden",
    "number": "07",
    "title": "รีวิวโรงแรม BB Le Garden",
    "role": "Camera / Post-production",
    "type": "Hotel Review",
    "format": "Review / Location Video",
    "image": "assets/project-07.webp",
    "description": "งานรีวิวสถานที่ที่ครอบคลุมตั้งแต่การสำรวจโลเคชัน กำหนดมุมกล้อง เตรียมอุปกรณ์ ไปจนถึงขั้นตอนตัดต่อและเกรดสี",
    "duties": [
      "สำรวจสถานที่และกำหนดมุมกล้อง",
      "จัดเตรียมอุปกรณ์สำหรับการถ่ายทำ",
      "ถ่ายภาพบรรยากาศและรายละเอียดสถานที่",
      "เรียนรู้กระบวนการตัดต่อและเกรดสี"
    ],
    "url": "",
    "gallery": [
    
      
    
    ]
  },
  {
    "id": "documentary",
    "number": "08",
    "title": "โปรเจกต์สารคดี",
    "role": "Camera Man",
    "type": "Documentary",
    "format": "Documentary Production",
    "image": "assets/project-08.webp",
    "description": "สารคดีที่เปิดมุมมองต่อเบื้องหลังอาชีพสัปเหร่อ ซึ่งเป็นเรื่องที่ผู้ชมทั่วไปอาจไม่ค่อยได้รับรู้ โดยใช้ภาพและองค์ประกอบเพื่อสร้างความเข้าใจอย่างเคารพต่อเรื่องราว",
    "duties": [
      "ศึกษาบริบทและเรื่องราวของตัวละคร",
      "ถ่ายทำในบทบาท Camera Man",
      "เลือกมุมกล้องและจัดองค์ประกอบภาพให้สื่อสารเรื่องราวได้ชัดเจน"
    ],
    "url": "https://www.youtube.com/watch?v=A_Rq_f_PX7I&t=2s",
    "gallery": [
      "assets/s1.jpg",
      "assets/s2.jpg",
      "assets/s3.jpg"
    ]
  },
  {
    "id": "mahachai-delivery",
    "number": "09",
    "title": "มหาชัยกรุ๊ป เดลิเวอรี่",
    "role": "Camera Assistant",
    "type": "Branded Content",
    "format": "Commercial / Branded Content",
    "image": "assets/project-09.webp",
    "description": "งานถ่ายทำร่วมกับ KKStudioHouse ที่ได้เรียนรู้การทำงานในกองจริง การสนับสนุนทีมกล้อง และการเตรียมความพร้อมของอุปกรณ์ตามจังหวะการผลิต",
    "duties": [
      "ทำงานร่วมกับทีม KKStudioHouse",
      "ปฏิบัติหน้าที่ Camera Assistant",
      "เตรียมและดูแลความพร้อมของอุปกรณ์กล้อง",
      "ช่วยให้การถ่ายทำดำเนินไปอย่างต่อเนื่อง"
    ],
    "url": "https://www.facebook.com/share/v/1LsE1u2WBD/",
    "gallery": [
      "assets/project-09.webp",
      "assets/bts-04.webp",
      "assets/bts-05.webp",
      "assets/bts-06.webp"
    ]
  },

  // ===== TEMPLATE เพิ่มผลงานใหม่ ช่องที่ 10-19 =====
  // คัดลอก object นี้แล้วเปลี่ยนข้อมูลด้านล่างได้เลย
  {
    "id": "เงาเเทนคน", // รหัสผลงาน ต้องไม่ซ้ำกับผลงานอื่น
    "number": "10", // หมายเลขช่องผลงาน
    "title": "เงาแทนคน", // ชื่อผลงานแสดงบนเว็บ
    "role": "Camera Assistant", // หน้าที่ของคุณในงานนี้
    // เช่น Film / Commercial / Content
    "format": "รูปแบบการผลิต", // รายละเอียดรูปแบบงาน
    "image": "assets/project-12-gallery-3.jpg", // รูปปกผลงาน
    "description": "ใกำหนดมุมกล้องดูสถานที่จัดเตรียมอุปกรณ์เรียนรู้การทำงานการวางเเผนการหามุมกล้องเเละช่วยเหลือในเเต่ละหน้าที่", // คำอธิบายหน้า Project
    "duties": [ // รายการหน้าที่ที่ทำในงาน
      "หน้าที่ที่ 1",
      "หน้าที่ที่ 2",
      "หน้าที่ที่ 3"
    ],
    "url": "https://drive.google.com/file/d/1lpK1GxC2PvO7igdvzhb-0CXAsLMHCHIN/view?usp=sharing", 
    "gallery": [ // รูปเพิ่มเติมในหน้ารายละเอียด
      "assets/project-12-gallery-3.jpg",
      "assets/project-12-gallery-1.jpg",
      "assets/project-12-gallery-2.jpg",
      
    ]
  
  },
  {
    "id": "นึกย้อนวันเก่า", // รหัสผลงาน
    "number": "11", // หมายเลขช่อง
    "title": "นึกย้อนวันเก่า", // ชื่อผลงาน
    "role": "Camera Assistant", // บทบาท
    "type": "Music Video", // ประเภท
    "format": "Camera & Lighting Production", // รูปแบบ
    "image": "assets/project-11-gallery-2.jpg", // รูปปก
    "description": "จัดทำขึ้นเพื่อการฝึกทักษะกำหนดภาพที่ต้องการเเละประสานงานกับทีมในเเต่ละขั้นตอน", // คำอธิบาย
    "duties": ["คอยกำหนดจุดกำเนิดเเสงมองหามุมกล้องเล่าเรื่องภาพที่ต้องการประสานงานเเต่ละทีม"], // หน้าที่
    "url": "https://www.youtube.com/watch?v=wlXUdG6TC_8", // ลิงก์วิดีโอ
    "gallery": ["assets/project-11-gallery-2.jpg",
      "assets/project-11-gallery-3.jpg",
      "assets/project-11-gallery-1.jpg",] // รูปเพิ่มเติม
  },
  {
    "id": "พบรัก COVER MV", // รหัสผลงาน
    "number": "12", // หมายเลขช่อง
    "title": "พบรัก COVER MV", // ชื่อผลงาน
    "role": "Focus Puller", // บทบาท
    "type": "Music Video", // ประเภท
    "format": "Video Production", // รูปแบบ
    "image": "assets/project-23-gallery-3.jpg", // รูปปก
    "description": "Music Viedo Cover จัดทำเพื่อฝึกกระบวนการผลิตงานภาพยนตร์เพลง ตั้งเเต่การออกเเบบภาพ จนถึงการควบคุมบรรยากาศของฉาก", // คำอธิบาย
    "duties": ["ควบคุมเเละปรับความคมชัดของภาพให้อยู่ในจุดที่ต้องการตลอดเวลาการถ่ายทำพร้อมทั้งดูเเลเเละจัดการอุปกรณ์ทั้งหมด"], // หน้าที่
    "url": "https://www.youtube.com/watch?v=m3cKQ2O8T-M", // ลิงก์วิดีโอ
    "gallery": ["assets/project-23-gallery-2.jpg",
      "assets/project-23-gallery-3.jpg",
  
      ] 
  },
  {
    "id": "ภาพความทรงจำ", // รหัสผลงาน
    "number": "13", // หมายเลขช่อง
    "title": "ภาพความทรงจำ", // ชื่อผลงาน
    "role": "Actor", // บทบาท
    "type": "Short Film", // ประเภท
    "format": "On-set Acting", // รูปแบบ
    "image": "assets/project-01-gallery-1.jpg", // รูปปก
    "description": "นำเสนอเรื่องราวเกี่ยวกับความทรงจำผ่านตัวละครเเละตีความเรื่องราวผ่านประสบการณ์ของตัวเอง", // คำอธิบาย
  
    "url": "https://www.youtube.com/watch?v=zCyQyW--qZs", // ลิงก์วิดีโอ
    "gallery": ["assets/project-01-gallery-3.jpg",
      "assets/project-01-gallery-1.jpg",
      "assets/project-01-gallery-2.jpg",] // รูปเพิ่มเติม
  },
  {
    "id": "ห้วยหนอง คลองปลิง", // รหัสผลงาน
    "number": "14", // หมายเลขช่อง
    "title": "ห้วยหนอง คลองปลิง", // ชื่อผลงาน
    "role": "Assistant Camera", // บทบาท
    "type": "Vlog", // ประเภท
    "format": "Ran-and-Gun production", // รูปแบบ
    "image": "assets/project-28-gallery-3.jpg", // รูปปก
    "description": "คอนเทนต์วิดีโอรูปแบบ Vlog เล่าเรื่องราวการหาปลิงสร้างรายได้ในรูปเเบบที่เป็นกันเองเน้นความคล่องตัวในการถ่ายทำ", // คำอธิบาย
    
    "url": "https://www.youtube.com/watch?v=ZOevDzYRst0&t=1s", // ลิงก์วิดีโอ
    "gallery": ["assets/project-28-gallery-1.jpg",
      "assets/project-28-gallery-2.jpg",
      "assets/project-28-gallery-3.jpg",] // รูปเพิ่มเติม
  },
  {
    "id": "THROUGH THE HUSTLE", // รหัสผลงาน
    "number": "15", // หมายเลขช่อง
    "title": "THROUGH THE HUSTLE", // ชื่อผลงาน
    "role": "Gaffre", // บทบาท
    "type": "SHORT FILM", // ประเภท
    "format": "ดูเเลการจัดเเสง การจัดสถานที่ในการถ่ายทำ", // รูปแบบ
    "image": "assets/project-02-gallery-2.jpg", // รูปปก
    "description": "ภาพยนตร์สั้นเเนวกีฬา บาสเกตบอลเล่าเรื่องราวการพยามการข้ามขีดจำกัดผ่านการเล่าเรื่องด้วยภาพ", // คำอธิบาย
    "duties": ["ออกแบบเเละควบคุมระบบเเสงวางเเผนเเละจัดทิศทางหน้าเซตเพื่อดึงอารมณ์ความตึงเครียดของการเเข่งขันเเละสร้างMood& Tone"], // หน้าที่
    "url": "https://www.youtube.com/watch?v=RZPY1lr7Bas&t=1s", // ลิงก์วิดีโอ
    
  },
  {
    "id": "จะให้ลืมยังไง", // รหัสผลงาน
    "number": "16", // หมายเลขช่อง
    "title": "จะให้ลืมยังไง", // ชื่อผลงาน
    "role": "Gaffre", // บทบาท
    "type": "Music Video", // ประเภท
    "format": "Music Video", // รูปแบบ
    "image": "assets/project-26-gallery-1.jpg", // รูปปก
    "description": "Music Video การเล่าเรื่องผ่านภาพ เเละ การสร้างอารมณ์ให้สอดคล้องกับเนื้อหาผ่านการทำงานร่วมกับทีมProduction", // คำอธิบาย
    "duties": ["ออกแบบ Mood & Tone ของงานกำหนดรูปเเบบการเล่าเรื่องด้วยภาพที่ต้องการก่อนควบคุมการถ่ายทำประสานกับทีมในเเต่ละขั้นตอน"], // หน้าที่
    "url": "https://www.youtube.com/watch?v=ofd73CEAUzQ", // ลิงก์วิดีโอ
    "gallery": ["assets/project-26-gallery-1.jpg",
      "assets/project-26-gallery-2.jpg",
      ] 
  },
  {
    "id": "The House", // รหัสผลงาน
    "number": "17", // หมายเลขช่อง
    "title": "The House", // ชื่อผลงาน
    "role": "Assistant Camera", // บทบาท
    "type": "SHORT FILM", // ประเภท
    "format": "หนังสั้นในโจทย์ Opening Sence Genre Horror ในรายวิชาเรียน", // รูปแบบ
    "image": "assets/project-19-gallery-3.jpg", // รูปปก
    "description": "พัฒนาแนวคิดและออกแบบรูปแบบการเปิดเรื่อง วางลำดับฉาก การถ่ายทำ และองค์ประกอบด้านภาพ ก่อนนำมาตัดต่อเพื่อสร้างจังหวะ ความต่อเนื่อง และอารมณ์ของหนังสยองขวัญ", // คำอธิบาย
    "duties": ["ออกแบบเเละควบคุมระบบเเสงวางเเผนเเละจัดทิศทางหน้าเซตเพื่อดึงอารมณ์ความตึงเครียดของการเเข่งขันเเละสร้างMood& Tone"], // หน้าที่
    "url": "https://www.youtube.com/watch?v=R1H8gWlRXok", // ลิงก์วิดีโอ
    "gallery": ["assets/project-19-gallery-1.jpg",
      "assets/project-19-gallery-2.jpg",
      "assets/project-19-gallery-3.jpg",] // รูปเพิ่มเติม
  },
  {
    
    "id": "พลังเเห่งการเเบ่งปัน", // รหัสผลงาน
    "number": "18", // หมายเลขช่อง
    "title": "พลังเเห่งการเเบ่งปัน", // ชื่อผลงาน
    "role": "Assistant Camera", // บทบาท
    "type": "คลิปสั้น", // ประเภท
    "format": "ร่วมงานกับทีมงานแบ่งปัน แจกจ่ายบริจาคทุนการศึกษาให้แก่โรงเรียนยากไร้", // รูปแบบ
    "image": "assets/project-29-gallery-1.jpg", // รูปปก
    "description": "ดีโอบันทึกกิจกรรมแบ่งปันและส่งต่อโอกาสทางการศึกษา โดยถ่ายทอดบรรยากาศของการให้และความร่วมมือผ่านภาพเคลื่อนไหว เพื่อสะท้อนคุณค่าของการช่วยเหลือและการแบ่งปันในสังคม", // คำอธิบาย
    "duties": ["ออกแบบเเละควบคุมระบบเเสงวางเเผนเเละจัดทิศทางหน้าเซตเพื่อดึงอารมณ์ความตึงเครียดของการเเข่งขันเเละสร้างMood& Tone"], // หน้าที่
    "url": "https://www.youtube.com/watch?v=3D8zYaMIScE", // ลิงก์วิดีโอ
    "gallery": ["assets/project-29-gallery-2.jpg",
      "assets/project-29-gallery-3.jpg",
      "assets/project-29-gallery-1.jpg",] // รูปเพิ่มเติม
  ,},
  {
    
    "id": "One Sence", // รหัสผลงาน
    "number": "19", // หมายเลขช่อง
    "title": "One Sence", // ชื่อผลงาน
    "role": "Actor", // บทบาท
    "type": "SHORT FILM", // ประเภท
    "format": "Video Production", // รูปแบบ
    "image": "assets/project-20-gallery-2.jpg", // รูปปก
    "description": "ภาพยนตร์สั้นในรายวิชา ที่ทดลองเล่าเรื่องผ่านรูปแบบ One Scene โดยเน้นการใช้พื้นที่เดียว การจัดองค์ประกอบภาพ และการออกแบบแสงเพื่อสร้างอารมณ์และบรรยากาศของฉาก", // คำอธิบาย
    "duties": ["ออกแบบเเละควบคุมระบบเเสงวางเเผนเเละจัดทิศทางหน้าเซตเพื่อดึงอารมณ์ความตึงเครียดของการเเข่งขันเเละสร้างMood& Tone"], // หน้าที่
    "url": "https://www.youtube.com/watch?v=Qn3-88Uh-Iw", // ลิงก์วิดีโอ
    "gallery": ["assets/project-20-gallery-1.jpg",
      "assets/project-20-gallery-3.jpg",
      "assets/project-20-gallery-2.jpg",] // รูปเพิ่มเติม
  ,
  }
  

];
