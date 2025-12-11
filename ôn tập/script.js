// ================== DỮ LIỆU BỘ ĐỀ ==================
const questionBanks = [
  // -------- Bộ đề 1: Mạng máy tính --------
  {
    id: "net",
    name: "Mạng máy tính",
    chapters: [
      { value: "all", label: "Tất cả các chương" },
      { value: "1", label: "Chương 1 – Tổng quan" },
      { value: "2", label: "Chương 2 – Mô hình OSI" },
      { value: "3", label: "Chương 3 – Mạng LAN" },
      { value: "4", label: "Chương 4 – Internet & TCP/IP" },
      { value: "5", label: "Chương 5 – Một số vấn đề mạng" },
      { value: "6", label: "Chương 6 – Quản trị mạng cơ bản" }
    ],
    examConfig: {
      numQuestions: 40, // thi thử: luôn lấy tối đa 40 câu
      durationMinutes: 20
    },
    questions: [
      // ===== CHƯƠNG 1 =====
      {
        id: 1,
        chapter: 1,
        text: "Mạng máy tính là gì?",
        options: [
          "Tập hợp các máy tính độc lập, không có kết nối với nhau.",
          "Tập hợp các máy tính kết nối với nhau qua môi trường truyền dẫn và tuân theo các quy tắc truyền thông.",
          "Một máy tính đơn lẻ có cấu hình mạnh.",
          "Hệ điều hành dùng để quản lý máy tính."
        ],
        answer: 1,
        explanation: `Theo phần Tổng quan về mạng, mạng máy tính là tập hợp các máy tính được nối với nhau qua môi trường truyền dẫn và tuân theo các quy tắc truyền thông để trao đổi thông tin, chia sẻ tài nguyên.`
      },
      {
        id: 2,
        chapter: 1,
        text: "Mục tiêu chính KHÔNG phải của mạng máy tính là:",
        options: [
          "Chia sẻ tài nguyên như file, máy in, cơ sở dữ liệu.",
          "Tăng độ tin cậy nhờ có dự phòng.",
          "Giảm khả năng giao tiếp giữa các người dùng.",
          "Giảm chi phí nhờ dùng chung thiết bị."
        ],
        answer: 2,
        explanation: `Mạng giúp chia sẻ tài nguyên, tăng độ tin cậy và giảm chi phí, đồng thời mở rộng khả năng giao tiếp. “Giảm khả năng giao tiếp giữa các người dùng” đi ngược lại mục tiêu của mạng.`
      },
      {
        id: 3,
        chapter: 1,
        text: "Dịch vụ nào sau đây là dịch vụ mạng?",
        options: [
          "Soạn thảo văn bản bằng Word.",
          "Thư điện tử (E-mail).",
          "Gõ văn bản bằng bàn phím.",
          "Lưu file lên USB."
        ],
        answer: 1,
        explanation: `Dịch vụ mạng là dịch vụ sử dụng hạ tầng mạng để trao đổi dữ liệu giữa các máy. E-mail cần có kết nối mạng và máy chủ thư nên là dịch vụ mạng.`
      },
      {
        id: 4,
        chapter: 1,
        text: "ARPANET – tiền thân của Internet – được xây dựng khoảng thời gian nào?",
        options: ["Những năm 1950.", "Những năm 1960.", "Những năm 1980.", "Những năm 2000."],
        answer: 1,
        explanation: `ARPANET bắt đầu được xây dựng và thử nghiệm vào cuối thập niên 1960 (khoảng 1969) bởi Bộ Quốc phòng Mỹ, sau này phát triển thành Internet.`
      },
      {
        id: 5,
        chapter: 1,
        text: "WWW (World Wide Web) gắn với tên của ai?",
        options: ["Bill Gates.", "Tim Berners-Lee.", "Linus Torvalds.", "Vinton Cerf."],
        answer: 1,
        explanation: `Tim Berners-Lee (CERN) là người đề xuất và xây dựng WWW: trang web, URL, HTTP, trình duyệt web đầu tiên.`
      },
      {
        id: 6,
        chapter: 1,
        text: "Topology nào sau đây là topology quảng bá (broadcast)?",
        options: ["Point-to-point.", "Bus.", "Mesh.", "Star."],
        answer: 1,
        explanation: `Trong mạng Bus, tất cả các máy nối chung trên một đường truyền, khi một máy gửi thì tín hiệu được quảng bá trên toàn tuyến cáp.`
      },
      {
        id: 7,
        chapter: 1,
        text: "Giao thức (protocol) trong mạng máy tính là:",
        options: [
          "Một thiết bị phần cứng dùng để kết nối mạng.",
          "Tập hợp các quy tắc quy định cách các thực thể giao tiếp với nhau.",
          "Một loại cáp dùng để truyền dữ liệu.",
          "Một phần mềm diệt virus."
        ],
        answer: 1,
        explanation: `Giao thức là tập các quy tắc quy định cú pháp, ngữ nghĩa, trình tự trao đổi dữ liệu giữa các thực thể trong mạng.`
      },

      // ===== CHƯƠNG 2 =====
      {
        id: 8,
        chapter: 2,
        text: "Mô hình tham chiếu OSI gồm bao nhiêu tầng?",
        options: ["3 tầng.", "4 tầng.", "5 tầng.", "7 tầng."],
        answer: 3,
        explanation: `Mô hình tham chiếu OSI do ISO đề xuất gồm 7 tầng: Vật lý, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng.`
      },
      {
        id: 9,
        chapter: 2,
        text: "Tầng nào trong mô hình OSI chịu trách nhiệm định tuyến gói tin giữa các mạng?",
        options: [
          "Tầng Vật lý (Physical).",
          "Tầng Liên kết dữ liệu (Data Link).",
          "Tầng Mạng (Network).",
          "Tầng Giao vận (Transport)."
        ],
        answer: 2,
        explanation: `Tầng Mạng (Network) có chức năng đánh địa chỉ logic (IP) và định tuyến gói dữ liệu giữa các mạng con khác nhau.`
      },
      {
        id: 10,
        chapter: 2,
        text: "Trong kiến trúc phân tầng, PDU (Protocol Data Unit) là gì?",
        options: [
          "Dữ liệu dịch vụ mà tầng dưới cung cấp.",
          "Thông tin điều khiển của giao thức.",
          "Tổng hợp thông tin điều khiển và dữ liệu dịch vụ (PCI + SDU).",
          "Tên gọi khác của địa chỉ IP."
        ],
        answer: 2,
        explanation: `PDU là đơn vị dữ liệu ở từng tầng, gồm phần thông tin điều khiển giao thức (header, trailer) gắn với dữ liệu dịch vụ của tầng trên.`
      },
      {
        id: 11,
        chapter: 2,
        text: "Tầng nào trong mô hình OSI đảm nhiệm việc mã hóa, nén và định dạng dữ liệu?",
        options: [
          "Tầng Trình diễn (Presentation).",
          "Tầng Phiên (Session).",
          "Tầng Ứng dụng (Application).",
          "Tầng Giao vận (Transport)."
        ],
        answer: 0,
        explanation: `Tầng Trình diễn lo về biểu diễn dữ liệu: mã hóa/giải mã, nén/giải nén, chuyển đổi định dạng.`
      },
      {
        id: 12,
        chapter: 2,
        text: "Tổ chức nào sau đây đưa ra mô hình tham chiếu OSI?",
        options: ["IETF.", "ISO.", "ICANN.", "ITU."],
        answer: 1,
        explanation: `Mô hình OSI (Open Systems Interconnection) do tổ chức tiêu chuẩn hóa quốc tế ISO xây dựng.`
      },
      {
        id: 13,
        chapter: 2,
        text: "Trong quá trình truyền thông, việc \"thêm header\" của từng tầng ở phía gửi được gọi là:",
        options: ["Decapsulation.", "Multiplexing.", "Encapsulation.", "Demultiplexing."],
        answer: 2,
        explanation: `Encapsulation là quá trình đóng gói: mỗi tầng ở phía gửi gắn thêm header (và có thể trailer) vào dữ liệu.`
      },

      // ===== CHƯƠNG 3 =====
      {
        id: 14,
        chapter: 3,
        text: "Đặc điểm nào sau đây đúng với mạng LAN?",
        options: [
          "Phạm vi địa lý rất rộng (toàn cầu).",
          "Tốc độ thấp, chi phí rất cao.",
          "Phạm vi nhỏ (phòng, tòa nhà, trường…), tốc độ cao.",
          "Chỉ dùng cho kết nối không dây."
        ],
        answer: 2,
        explanation: `LAN có phạm vi hẹp (phòng, tòa nhà, cơ quan, trường học) nhưng tốc độ cao, chi phí truyền thông thấp.`
      },
      {
        id: 15,
        chapter: 3,
        text: "Mạng LAN có cấu trúc hình sao (Star) có đặc điểm:",
        options: [
          "Không có thiết bị trung tâm.",
          "Các máy nối vào một thiết bị trung tâm như switch/hub.",
          "Tất cả các máy nối liên tiếp thành vòng khép kín.",
          "Mọi máy đều kết nối trực tiếp với mọi máy khác."
        ],
        answer: 1,
        explanation: `Trong topology hình sao, tất cả máy trạm nối về một thiết bị trung tâm (hub, switch).`
      },
      {
        id: 16,
        chapter: 3,
        text: "Thiết bị nào hoạt động ở tầng Vật lý, dùng để khuếch đại và làm sạch tín hiệu?",
        options: ["Router.", "Bridge.", "Repeater.", "Switch."],
        answer: 2,
        explanation: `Repeater làm việc ở tầng Vật lý, nhận tín hiệu bị suy hao, khuếch đại và tái tạo lại để kéo dài cự ly truyền.`
      },
      {
        id: 17,
        chapter: 3,
        text: "Thiết bị nào dùng địa chỉ MAC để lọc và chuyển frame giữa các đoạn mạng LAN?",
        options: ["Repeater.", "Bridge.", "Router.", "Modem."],
        answer: 1,
        explanation: `Bridge và switch tầng 2 dùng bảng địa chỉ MAC để quyết định chuyển frame sang cổng nào.`
      },
      {
        id: 18,
        chapter: 3,
        text: "Thiết bị nào làm việc ở tầng Mạng (Network) và dùng địa chỉ IP để định tuyến gói tin?",
        options: ["Switch tầng 2.", "Bridge.", "Router.", "Repeater."],
        answer: 2,
        explanation: `Router làm việc ở tầng Mạng, phân tích địa chỉ IP đích để chọn đường đi phù hợp giữa các mạng.`
      },
      {
        id: 19,
        chapter: 3,
        text: "Nhược điểm chính của mạng Bus là:",
        options: [
          "Tốn nhiều cáp.",
          "Khó mở rộng và dễ tắc nghẽn, khó phát hiện lỗi.",
          "Không thể kết nối thêm máy mới.",
          "Không thể dùng trong môi trường có nhiễu."
        ],
        answer: 1,
        explanation: `Topology Bus: nhiều nút chia sẻ chung đường truyền -> dễ xung đột, khó khoanh vùng lỗi và mở rộng.`
      },

      // ===== CHƯƠNG 4 =====
      {
        id: 20,
        chapter: 4,
        text: "Internet là:",
        options: [
          "Một mạng LAN duy nhất có kích thước lớn.",
          "Tập hợp các mạng máy tính kết nối với nhau dùng bộ giao thức TCP/IP.",
          "Một loại hệ điều hành dành cho máy chủ.",
          "Một phần mềm trình duyệt web."
        ],
        answer: 1,
        explanation: `Internet là liên mạng – tập hợp nhiều mạng con độc lập nối lại với nhau, sử dụng bộ giao thức TCP/IP chung.`
      },
      {
        id: 21,
        chapter: 4,
        text: "Bộ giao thức nào là nền tảng của Internet?",
        options: ["HTTP.", "FTP.", "TCP/IP.", "SMTP."],
        answer: 2,
        explanation: `TCP/IP là bộ giao thức cơ bản cho Internet, các giao thức ứng dụng như HTTP, FTP, SMTP đều chạy trên đó.`
      },
      {
        id: 22,
        chapter: 4,
        text: "Mô hình TCP/IP thông thường gồm bao nhiêu tầng?",
        options: ["2 tầng.", "3 tầng.", "4 tầng.", "7 tầng."],
        answer: 2,
        explanation: `Mô hình TCP/IP thường được mô tả với 4 tầng: Truy cập mạng, Internet, Giao vận, Ứng dụng.`
      },
      {
        id: 23,
        chapter: 4,
        text: "Tầng nào trong mô hình TCP/IP chịu trách nhiệm cung cấp các dịch vụ như HTTP, FTP, SMTP, DNS,…?",
        options: [
          "Tầng Truy cập mạng (Network Access).",
          "Tầng Internet.",
          "Tầng Giao vận (Transport).",
          "Tầng Ứng dụng (Application)."
        ],
        answer: 3,
        explanation: `HTTP, FTP, SMTP, DNS... đều là các giao thức ứng dụng, thuộc tầng Ứng dụng của mô hình TCP/IP.`
      },
      {
        id: 24,
        chapter: 4,
        text: "Trong mô hình TCP/IP, giao thức TCP thuộc tầng nào?",
        options: [
          "Tầng Truy cập mạng.",
          "Tầng Internet.",
          "Tầng Giao vận.",
          "Tầng Ứng dụng."
        ],
        answer: 2,
        explanation: `TCP là giao thức hướng kết nối, đảm bảo tin cậy, thuộc tầng Giao vận của mô hình TCP/IP.`
      },
      {
        id: 25,
        chapter: 4,
        text: "Ghép tương ứng nào sau đây giữa TCP/IP và OSI là đúng?",
        options: [
          "TCP/IP Internet ≈ OSI tầng Vật lý.",
          "TCP/IP Application ≈ OSI tầng 5–7.",
          "TCP/IP Transport ≈ OSI tầng 2.",
          "TCP/IP Network Access ≈ OSI tầng 6–7."
        ],
        answer: 1,
        explanation: `Tầng Ứng dụng của TCP/IP gom các chức năng của 3 tầng trên cùng OSI: Phiên, Trình diễn, Ứng dụng.`
      },

      // ===== CHƯƠNG 5 =====
      {
        id: 26,
        chapter: 5,
        text: "Phương pháp kiểm soát lỗi nào sau đây chỉ có khả năng phát hiện lỗi 1 bit mà không sửa được lỗi?",
        options: ["Bit chẵn lẻ (Parity).", "Mã Hamming.", "CRC.", "Cả A, B, C đều sửa được lỗi."],
        answer: 0,
        explanation: `Bit chẵn lẻ chỉ thêm 1 bit kiểm tra tính chẵn/lẻ số bit 1, nên phát hiện được một số lỗi đơn giản nhưng không sửa được.`
      },
      {
        id: 27,
        chapter: 5,
        text: "Mã Hamming có ưu điểm chính là:",
        options: [
          "Chỉ phát hiện được lỗi mà không sửa được.",
          "Phát hiện và sửa được 1 bit lỗi.",
          "Không cần chèn thêm bit kiểm tra.",
          "Chỉ áp dụng cho dữ liệu văn bản."
        ],
        answer: 1,
        explanation: `Mã Hamming dùng nhiều bit kiểm tra, đặt tại các vị trí đặc biệt, cho phép phát hiện và sửa được 1 bit lỗi.`
      },
      {
        id: 28,
        chapter: 5,
        text: "Bộ ba mục tiêu bảo mật cơ bản (CIA) gồm:",
        options: [
          "Confidentiality – Integrity – Availability.",
          "Confidentiality – Identity – Authentication.",
          "Control – Integrity – Authorization.",
          "Cryptography – Integrity – Accounting."
        ],
        answer: 0,
        explanation: `CIA trong bảo mật thông tin là: Tính bí mật, toàn vẹn và sẵn sàng.`
      },
      {
        id: 29,
        chapter: 5,
        text: "Mã hóa đối xứng có đặc điểm:",
        options: [
          "Dùng hai khóa khác nhau cho mã hóa và giải mã.",
          "Dùng một khóa chung cho cả mã hóa và giải mã.",
          "Không dùng khóa.",
          "Chỉ dùng cho mạng LAN."
        ],
        answer: 1,
        explanation: `Mã hóa đối xứng sử dụng cùng một khóa bí mật cho cả mã hóa và giải mã, yêu cầu chia sẻ khóa an toàn.`
      },
      {
        id: 30,
        chapter: 5,
        text: "Ví dụ nào sau đây là thuật toán mã hóa bất đối xứng?",
        options: ["AES.", "DES.", "RSA.", "CRC-32."],
        answer: 2,
        explanation: `RSA là thuật toán mã hóa khóa công khai (bất đối xứng). AES, DES là mã đối xứng; CRC-32 dùng kiểm tra lỗi.`
      },
      {
        id: 31,
        chapter: 5,
        text: "Địa chỉ IPv4 dài bao nhiêu bit?",
        options: ["16 bit.", "24 bit.", "32 bit.", "64 bit."],
        answer: 2,
        explanation: `Địa chỉ IPv4 có độ dài 32 bit, thường biểu diễn dạng 4 số thập phân cách nhau bởi dấu chấm.`
      },
      {
        id: 32,
        chapter: 5,
        text: "Địa chỉ 127.0.0.1 thường được dùng để chỉ:",
        options: [
          "Địa chỉ broadcast.",
          "Địa chỉ loopback (localhost).",
          "Địa chỉ mạng.",
          "Địa chỉ quảng bá toàn mạng."
        ],
        answer: 1,
        explanation: `127.0.0.1 là địa chỉ loopback, dùng để “tự kết nối” đến chính máy đó, thường gọi là localhost.`
      },
      {
        id: 39,
        chapter: 5,
        text: "Địa chỉ IPv4 255.255.255.255 thường được dùng để chỉ:",
        options: [
          "Địa chỉ mạng.",
          "Địa chỉ loopback (localhost).",
          "Địa chỉ của máy chủ DNS.",
          "Địa chỉ broadcast (quảng bá) toàn mạng."
        ],
        answer: 3,
        explanation: `255.255.255.255 là địa chỉ broadcast giới hạn, dùng để gửi gói tin tới tất cả host trong mạng cục bộ.`
      },

      // ===== CHƯƠNG 6 =====
      {
        id: 33,
        chapter: 6,
        text: "Mạng ngang hàng (peer-to-peer) trong Windows thường được tổ chức theo:",
        options: ["Domain.", "Workgroup.", "Forest.", "Cluster."],
        answer: 1,
        explanation: `Trong môi trường nhỏ, các máy Windows thường tổ chức theo Workgroup, các máy ngang quyền.`
      },
      {
        id: 34,
        chapter: 6,
        text: "Chuẩn bấm dây T568A và T568B dùng cho loại cáp nào?",
        options: ["Cáp đồng trục.", "Cáp quang.", "Cáp xoắn đôi UTP.", "Cáp HDMI."],
        answer: 2,
        explanation: `T568A/B là hai chuẩn sắp xếp màu lõi dây cho cáp mạng xoắn đôi (UTP) RJ45 trong Ethernet.`
      },
      {
        id: 35,
        chapter: 6,
        text: "Cáp thẳng (straight-through) thường dùng để nối:",
        options: [
          "Hai máy tính trực tiếp với nhau.",
          "PC với switch hoặc router.",
          "Hai switch với nhau.",
          "Hai router với nhau."
        ],
        answer: 1,
        explanation: `Cáp thẳng dùng để nối các thiết bị khác tầng (PC – switch, PC – router).`
      },
      {
        id: 36,
        chapter: 6,
        text: "Để hai máy trong cùng Workgroup nhìn thấy và truy cập được lẫn nhau, yêu cầu nào sau đây là đúng?",
        options: [
          "Hai máy phải ở hai subnet khác nhau.",
          "Hai máy phải cùng subnet và cùng Workgroup.",
          "Hai máy phải dùng hai hệ điều hành khác nhau.",
          "Hai máy phải có cùng địa chỉ IP."
        ],
        answer: 1,
        explanation: `Các máy muốn chia sẻ trong mạng ngang hàng cần đặt cùng Workgroup và cùng subnet IP.`
      },
      {
        id: 37,
        chapter: 6,
        text: "Để chia sẻ một thư mục trong Windows theo cách đơn giản, người dùng cần:",
        options: [
          "Xóa quyền truy cập của tất cả mọi người.",
          "Vào Properties → Sharing → Advanced Sharing → Share this folder.",
          "Gỡ bỏ thư mục khỏi hệ thống.",
          "Đổi tên thư mục thành SHARE."
        ],
        answer: 1,
        explanation: `Thao tác cơ bản: Properties → tab Sharing → Advanced Sharing → tick “Share this folder” và thiết lập quyền.`
      },
      {
        id: 38,
        chapter: 6,
        text: "Để một máy tính truy cập tài nguyên chia sẻ trên máy khác trong Workgroup, có thể dùng cú pháp:",
        options: [
          "http://ten-may.",
          "ftp://ten-may.",
          "\\\\ten-may hoặc \\\\IP.",
          "smtp://ten-may."
        ],
        answer: 2,
        explanation: `Trong Windows, truy cập chia sẻ mạng nội bộ thường dùng đường dẫn UNC dạng \\\\tên_máy hoặc \\\\địa_chỉ_IP.`
      },
      {
        id: 40,
        chapter: 4,
        text: "Trong mô hình TCP/IP, tầng nào chịu trách nhiệm đóng gói khung dữ liệu và làm việc với phần cứng mạng (card mạng, cáp, Wi-Fi, ...)?",
        options: [
          "Tầng Truy cập mạng (Network Access).",
          "Tầng Internet.",
          "Tầng Giao vận (Transport).",
          "Tầng Ứng dụng (Application)."
        ],
        answer: 0,
        explanation: `Tầng Truy cập mạng kết hợp chức năng của tầng Vật lý và Liên kết dữ liệu OSI, làm việc trực tiếp với card mạng, cáp, Wi-Fi.`
      }

      // 👉 Bạn có thể tiếp tục thêm câu hỏi mới cho từng chapter
      // bằng cách copy 1 object phía trên và đổi id, text, options, answer, chapter...
    ]
  },

  // -------- Bộ đề 2: C++ cơ bản (demo) --------
  {
    id: "cpp",
    name: "Lập trình C++ cơ bản",
    chapters: [
      { value: "all", label: "Tất cả các chương" },
      { value: "1", label: "Chương 1 – Cơ bản C++" },
      { value: "2", label: "Chương 2 – Biến & toán tử" },
      { value: "3", label: "Chương 3 – Mảng & hàm" }
    ],
    examConfig: {
      numQuestions: 30,
      durationMinutes: 45
    },
    questions: [
      {
        id: 1,
        chapter: 1,
        text: "Câu lệnh xuất dữ liệu ra màn hình trong C++ (dùng iostream) là:",
        options: ["cout <<", "printf()", "System.out.println()", "console.log()"],
        answer: 0
      },
      {
        id: 2,
        chapter: 1,
        text: "Thư viện chuẩn nào cần include để dùng cout và cin?",
        options: ["<stdio.h>", "<iostream>", "<string>", "<cmath>"],
        answer: 1
      },
      {
        id: 3,
        chapter: 1,
        text: "Khai báo hàm main đúng chuẩn trong C++ là:",
        options: ["void main()", "main()", "int main()", "public static void main(String[] args)"],
        answer: 2
      },
      {
        id: 4,
        chapter: 1,
        text: "Kiểu dữ liệu nào sau đây thường dùng để lưu số nguyên 4 byte?",
        options: ["int", "double", "char", "bool"],
        answer: 0
      },
      {
        id: 5,
        chapter: 2,
        text: "Toán tử nào dùng để lấy phần dư trong C++?",
        options: ["/", "%", "*", "++"],
        answer: 1
      },
      {
        id: 6,
        chapter: 2,
        text: "Câu lệnh nhập một số nguyên n từ bàn phím là:",
        options: ["cin >> n;", "cout >> n;", "scanf(n);", "input(n);"],
        answer: 0
      },
      {
        id: 7,
        chapter: 1,
        text: "Ký hiệu nào dùng để bắt đầu một chú thích một dòng trong C++?",
        options: ["/*", "//", "#", "<!--"],
        answer: 1
      },
      {
        id: 8,
        chapter: 3,
        text: "Mảng một chiều a có 10 phần tử, chỉ số phần tử hợp lệ là:",
        options: ["0..9", "1..10", "0..10", "-1..8"],
        answer: 0
      },
      {
        id: 9,
        chapter: 3,
        text: "Khai báo hàm trong C++ đúng dạng là:",
        options: [
          "function int sum(int a, int b);",
          "int sum(a, b);",
          "int sum(int a, int b);",
          "sum(int a, int b) -> int;"
        ],
        answer: 2
      },
      {
        id: 10,
        chapter: 3,
        text: "Từ khóa nào dùng để trả về giá trị từ hàm?",
        options: ["break", "exit", "return", "continue"],
        answer: 2
      }
    ]
  },

  // -------- Bộ đề 3: Cơ sở dữ liệu / SQL (demo) --------
  {
    id: "db",
    name: "Cơ sở dữ liệu (SQL)",
    chapters: [
      { value: "all", label: "Tất cả các chương" },
      { value: "1", label: "Chương 1 – Khái niệm CSDL" },
      { value: "2", label: "Chương 2 – Mô hình quan hệ" },
      { value: "3", label: "Chương 3 – SQL cơ bản" }
    ],
    examConfig: {
      numQuestions: 30,
      durationMinutes: 45
    },
    questions: [
      {
        id: 1,
        chapter: 1,
        text: "Cơ sở dữ liệu (database) là:",
        options: [
          "Một file văn bản đơn lẻ.",
          "Tập hợp có tổ chức các dữ liệu có liên quan với nhau, được lưu trữ trên máy tính.",
          "Một chương trình soạn thảo văn bản.",
          "Một hệ điều hành."
        ],
        answer: 1
      },
      {
        id: 2,
        chapter: 2,
        text: "Trong mô hình CSDL quan hệ, dữ liệu được tổ chức dưới dạng:",
        options: [
          "Cây (tree).",
          "Tập tin tuần tự.",
          "Các bảng (table) gồm hàng và cột.",
          "Mảng một chiều."
        ],
        answer: 2
      },
      {
        id: 3,
        chapter: 2,
        text: "Trong mô hình quan hệ, hàng (row) còn được gọi là:",
        options: ["Field.", "Attribute.", "Tuple (bộ).", "Index."],
        answer: 2
      },
      {
        id: 4,
        chapter: 2,
        text: "Khóa chính (PRIMARY KEY) dùng để:",
        options: [
          "Lưu trữ mật khẩu.",
          "Định danh duy nhất mỗi bộ (tuple) trong bảng.",
          "Chứa toàn bộ dữ liệu của bảng.",
          "Xác định thứ tự sắp xếp mặc định."
        ],
        answer: 1
      },
      {
        id: 5,
        chapter: 3,
        text: "Ngôn ngữ chuẩn dùng để làm việc với CSDL quan hệ là:",
        options: ["HTML.", "SQL.", "CSS.", "XML."],
        answer: 1
      },
      {
        id: 6,
        chapter: 3,
        text: "Câu lệnh SQL dùng để truy vấn dữ liệu là:",
        options: ["INSERT.", "UPDATE.", "DELETE.", "SELECT."],
        answer: 3
      },
      {
        id: 7,
        chapter: 3,
        text: "Mệnh đề WHERE trong câu lệnh SELECT dùng để:",
        options: [
          "Chỉ định bảng cần truy vấn.",
          "Chỉ định điều kiện lọc các hàng.",
          "Chỉ định cột cần hiển thị.",
          "Sắp xếp kết quả."
        ],
        answer: 1
      },
      {
        id: 8,
        chapter: 3,
        text: "Từ khóa nào dùng để sắp xếp kết quả truy vấn trong SQL?",
        options: ["GROUP BY.", "ORDER BY.", "HAVING.", "BETWEEN."],
        answer: 1
      },
      {
        id: 9,
        chapter: 2,
        text: "Ràng buộc NOT NULL có ý nghĩa:",
        options: [
          "Giá trị của thuộc tính phải là 0.",
          "Giá trị của thuộc tính không được để trống.",
          "Giá trị của thuộc tính phải là duy nhất.",
          "Giá trị của thuộc tính là khóa chính."
        ],
        answer: 1
      },
      {
        id: 10,
        chapter: 3,
        text: "Câu lệnh tạo bảng đơn giản trong SQL thường có dạng:",
        options: [
          "MAKE TABLE TenBang (...);",
          "CREATE TABLE TenBang (...);",
          "NEW TABLE TenBang (...);",
          "TABLE TenBang CREATE (...);"
        ],
        answer: 1
      }
    ]
  }
];

// ================== BIẾN TOÀN CỤC & DOM ==================
const questionsContainer = document.getElementById("questionsContainer");
const chapterFilter = document.getElementById("chapterFilter");
const bankSelect = document.getElementById("bankSelect");
const modeSelect = document.getElementById("modeSelect");
const randomMode = document.getElementById("randomMode");
const randomModeWrapper = document.getElementById("randomModeWrapper");
const examNote = document.getElementById("examNote");

const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const resultBox = document.getElementById("resultBox");
const scoreText = document.getElementById("scoreText");
const detailText = document.getElementById("detailText");
const toggleAnswersBtn = document.getElementById("toggleAnswersBtn");

const timerDisplay = document.getElementById("timerDisplay");
const timerLabel = document.getElementById("timerLabel");
const historyTableBody = document.getElementById("historyTableBody");

let currentBank = questionBanks[0];
let currentMode = "practice"; // "practice" | "exam"
let answerKeyVisible = false;

// Timer
let timerDirection = "up"; // "up" | "down"
let startTime = null; // cho đếm lên
let timerInterval = null;
let timerSecondsTotal = 0; // cho đếm xuống
let timerSecondsLeft = 0;

let hasSubmitted = false;

// ================== HÀM TIỆN ÍCH ==================
function indexToLetter(idx) {
  return String.fromCharCode("A".charCodeAt(0) + idx);
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatDateTime() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  return `${dd}/${mm} ${hh}:${mi}`;
}

function addHistoryRow(info) {
  if (!historyTableBody) return;
  const tr = document.createElement("tr");

  const cells = [
    info.timeStr,
    `${info.bankName} – ${info.chapterLabel} | ${info.modeText}`,
    `${info.correct}/${info.total}`,
    `${info.score10.toFixed(2)}/10 (${Math.round(info.percent)}%)`,
    info.rank,
    info.durationStr
  ];

  cells.forEach((text) => {
    const td = document.createElement("td");
    td.textContent = text;
    tr.appendChild(td);
  });

  historyTableBody.prepend(tr);
}

// ================== TIMER ==================
function updateTimerDisplay() {
  if (!timerDisplay) return;

  if (timerDirection === "down") {
    const sec = Math.max(0, timerSecondsLeft);
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    timerDisplay.textContent =
      String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  } else {
    if (!startTime) {
      timerDisplay.textContent = "00:00";
      return;
    }
    const diffSeconds = Math.floor((Date.now() - startTime) / 1000);
    const m = Math.floor(diffSeconds / 60);
    const s = diffSeconds % 60;
    timerDisplay.textContent =
      String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }
}

function startTimer() {
  clearInterval(timerInterval);
  hasSubmitted = false;

  const isExam = currentMode === "exam";

  if (isExam) {
    timerDirection = "down";
    const cfg = currentBank.examConfig || {};
    const minutes = cfg.durationMinutes || 60;
    timerSecondsTotal = minutes * 60;
    timerSecondsLeft = timerSecondsTotal;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
      timerSecondsLeft--;
      if (timerSecondsLeft <= 0) {
        timerSecondsLeft = 0;
        updateTimerDisplay();
        clearInterval(timerInterval);
        timerInterval = null;
        if (!hasSubmitted) {
          checkAnswers({ autoSubmit: true });
        }
      } else {
        updateTimerDisplay();
      }
    }, 1000);
  } else {
    timerDirection = "up";
    startTime = Date.now();
    updateTimerDisplay();
    timerInterval = setInterval(updateTimerDisplay, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function getElapsedSeconds() {
  if (currentMode === "exam") {
    if (!timerSecondsTotal) return 0;
    const used = timerSecondsTotal - timerSecondsLeft;
    return Math.max(0, Math.min(timerSecondsTotal, used));
  } else {
    if (!startTime) return 0;
    return Math.max(0, Math.floor((Date.now() - startTime) / 1000));
  }
}

// ================== RENDER & UI ==================
function populateBankSelect() {
  bankSelect.innerHTML = "";
  questionBanks.forEach((bank) => {
    const opt = document.createElement("option");
    opt.value = bank.id;
    opt.textContent = bank.name;
    bankSelect.appendChild(opt);
  });
}

function populateChapterFilter() {
  chapterFilter.innerHTML = "";
  currentBank.chapters.forEach((ch) => {
    const opt = document.createElement("option");
    opt.value = ch.value;
    opt.textContent = ch.label;
    chapterFilter.appendChild(opt);
  });
}

function updateModeUI() {
  const isExam = currentMode === "exam";

  if (randomModeWrapper) {
    randomModeWrapper.style.display = isExam ? "none" : "inline-flex";
  }
  if (examNote) {
    if (isExam) {
      const cfg = currentBank.examConfig || {};
      const maxQ = cfg.numQuestions || currentBank.questions.length;
      const duration = cfg.durationMinutes || 60;
      examNote.style.display = "inline";
      examNote.textContent = `Thi thử: tối đa ${maxQ} câu, thời gian ${duration} phút.`;
    } else {
      examNote.style.display = "none";
      examNote.textContent = "";
    }
  }
  if (chapterFilter) {
    chapterFilter.disabled = isExam; // Thi thử dùng toàn bộ bộ đề
  }
  if (timerLabel) {
    timerLabel.textContent = isExam ? "Còn lại:" : "Làm bài:";
  }
}

function renderQuestions() {
  const isExam = currentMode === "exam";
  const chapterValue = chapterFilter?.value || "all";

  questionsContainer.innerHTML = "";

  const allQs = currentBank.questions;
  let filtered = allQs;

  if (!isExam) {
    filtered = allQs.filter((q) => {
      if (chapterValue === "all") return true;
      return String(q.chapter) === String(chapterValue);
    });
  }

  let list = filtered;
  if (isExam) {
    // Thi thử: random 40 câu từ toàn bộ bộ đề
    const cfg = currentBank.examConfig || {};
    const maxQ = cfg.numQuestions || filtered.length;
    list = shuffleArray(allQs).slice(0, Math.min(maxQ, allQs.length));
  } else if (randomMode && randomMode.checked) {
    // Luyện tập: 20 câu ngẫu nhiên trong chương
    list = shuffleArray(filtered).slice(0, Math.min(20, filtered.length));
  }

  if (!list.length) {
    const p = document.createElement("p");
    p.style.fontSize = "0.9rem";
    p.style.color = "#9ca3af";
    p.textContent = "Chưa có câu hỏi cho lựa chọn này.";
    questionsContainer.appendChild(p);
  } else {
    list.forEach((q, idx) => {
      const card = document.createElement("div");
      card.className = "question-card";
      card.dataset.questionId = q.id;

      const header = document.createElement("div");
      header.className = "question-header";

      const title = document.createElement("div");
      title.className = "question-title";
      title.textContent = `Câu ${idx + 1}`;

      const tag = document.createElement("div");
      tag.className = "chapter-tag";
      tag.textContent = `Chương ${q.chapter}`;

      header.appendChild(title);
      header.appendChild(tag);

      const text = document.createElement("div");
      text.className = "question-text";
      text.textContent = q.text;

      const optionsDiv = document.createElement("div");
      optionsDiv.className = "options";

      q.options.forEach((opt, oIdx) => {
        const optionId = `q${q.id}_opt${oIdx}`;
        const wrapper = document.createElement("label");
        wrapper.className = "option-item";
        wrapper.setAttribute("for", optionId);

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = `q_${q.id}`;
        radio.id = optionId;
        radio.value = String(oIdx);

        const spanText = document.createElement("span");
        const letterSpan = document.createElement("span");
        letterSpan.className = "option-label";
        letterSpan.textContent = indexToLetter(oIdx) + ".";

        const contentSpan = document.createElement("span");
        contentSpan.textContent = " " + opt;

        spanText.appendChild(letterSpan);
        spanText.appendChild(contentSpan);

        wrapper.appendChild(radio);
        wrapper.appendChild(spanText);

        optionsDiv.appendChild(wrapper);
      });

      const explain = document.createElement("div");
      explain.className = "explain";

      card.appendChild(header);
      card.appendChild(text);
      card.appendChild(optionsDiv);
      card.appendChild(explain);

      questionsContainer.appendChild(card);
    });
  }

  // Reset kết quả & trạng thái
  stopTimer();
  resultBox.style.display = "none";
  scoreText.textContent = "";
  detailText.textContent = "";
  answerKeyVisible = false;
  toggleAnswersBtn.textContent = "Hiện đáp án";
  hasSubmitted = false;
  checkBtn.disabled = false;

  // Bắt đầu timer mới
  startTimer();
}

// ================== CHẤM ĐIỂM ==================
function buildExplainHTML(statusLabel, correctLetter, explanation) {
  let html = `<span class="explain-line"><span class="explain-label">${statusLabel}</span><span class="explain-answer"> Đáp án đúng: ${correctLetter}.</span></span>`;
  if (explanation) {
    html += `<span class="explain-detail">${explanation}</span>`;
  }
  return html;
}

function checkAnswers(options = {}) {
  const autoSubmit = options.autoSubmit || false;

  const cards = document.querySelectorAll(".question-card");
  if (!cards.length) return;

  let total = cards.length;
  let correct = 0;
  let unanswered = 0;

  cards.forEach((card) => {
    const qId = parseInt(card.dataset.questionId, 10);
    const q = currentBank.questions.find((qq) => qq.id === qId);
    const radios = card.querySelectorAll("input[type=radio]");
    const explain = card.querySelector(".explain");

    card.classList.remove("correct", "wrong");

    let chosenIndex = null;
    radios.forEach((r) => {
      if (r.checked) {
        chosenIndex = parseInt(r.value, 10);
      }
    });

    const correctLetter = indexToLetter(q.answer);

    if (chosenIndex === null) {
      unanswered++;
      const msg = buildExplainHTML("Chưa chọn", correctLetter, q.explanation);
      explain.innerHTML = msg;
      return;
    }

    if (chosenIndex === q.answer) {
      correct++;
      card.classList.add("correct");
      const msg = buildExplainHTML("Chính xác ✅", correctLetter, q.explanation);
      explain.innerHTML = msg;
    } else {
      card.classList.add("wrong");
      const msg = buildExplainHTML("Chưa đúng ❌", correctLetter, q.explanation);
      explain.innerHTML = msg;
    }
  });

  // Dừng timer & tính thời gian làm
  stopTimer();
  const diffSeconds = getElapsedSeconds();
  let elapsedText = "";
  let durationStr = "";

  if (diffSeconds > 0) {
    const m = Math.floor(diffSeconds / 60);
    const s = diffSeconds % 60;
    durationStr = `${m}m${s.toString().padStart(2, "0")}s`;
    elapsedText = ` Thời gian làm bài: ${m} phút ${s
      .toString()
      .padStart(2, "0")} giây.`;
  }

  // Điểm & xếp loại
  let score10 = 0;
  let percent = 0;
  let rank = "Chưa làm";

  if (total > 0) {
    score10 = (correct / total) * 10;
    percent = (correct / total) * 100;

    if (score10 >= 8.5) rank = "Giỏi";
    else if (score10 >= 7) rank = "Khá";
    else if (score10 >= 5) rank = "Trung bình";
    else rank = "Yếu";
  }

  resultBox.style.display = "block";
  scoreText.textContent = `Kết quả: ${correct}/${total} câu đúng | Điểm: ${score10.toFixed(
    2
  )}/10 (~${Math.round(percent)}%) | Xếp loại: ${rank}`;

  if (unanswered > 0) {
    detailText.textContent = `Bạn còn ${unanswered} câu chưa chọn đáp án.${elapsedText}`;
  } else {
    detailText.textContent = `Tiếp tục luyện thêm để nhớ lâu hơn.${elapsedText}`;
  }

  if (autoSubmit) {
    detailText.textContent += " (Hết giờ, hệ thống tự nộp bài.)";
  }

  // Lịch sử
  const bankName = currentBank.name;
  let chapterLabel;
  if (currentMode === "exam") {
    chapterLabel = "Toàn bộ bộ đề";
  } else {
    const opt = chapterFilter.options[chapterFilter.selectedIndex];
    chapterLabel = opt ? opt.textContent : "Tất cả chương";
  }

  let modeText;
  if (currentMode === "exam") {
    modeText = "Thi thử";
  } else if (randomMode && randomMode.checked) {
    modeText = "Luyện tập (20 câu ngẫu nhiên)";
  } else {
    modeText = "Luyện tập (tất cả câu lọc)";
  }

  const timeStr = formatDateTime();

  addHistoryRow({
    timeStr,
    bankName,
    chapterLabel,
    modeText,
    correct,
    total,
    score10,
    percent,
    rank,
    durationStr: durationStr || "--"
  });

  hasSubmitted = true;
  checkBtn.disabled = true;
}

// ================== RESET & ĐÁP ÁN ==================
function softResetQuiz() {
  const cards = document.querySelectorAll(".question-card");
  cards.forEach((card) => {
    card.classList.remove("correct", "wrong");
    const radios = card.querySelectorAll("input[type=radio]");
    radios.forEach((r) => (r.checked = false));
    const explain = card.querySelector(".explain");
    explain.innerHTML = "";
  });

  resultBox.style.display = "none";
  scoreText.textContent = "";
  detailText.textContent = "";

  answerKeyVisible = false;
  toggleAnswersBtn.textContent = "Hiện đáp án";

  hasSubmitted = false;
  checkBtn.disabled = false;

  startTimer();
}

function showAnswerKey() {
  const cards = document.querySelectorAll(".question-card");
  cards.forEach((card) => {
    const qId = parseInt(card.dataset.questionId, 10);
    const q = currentBank.questions.find((qq) => qq.id === qId);
    const explain = card.querySelector(".explain");

    const correctLetter = indexToLetter(q.answer);
    const msg = buildExplainHTML("Đáp án", correctLetter, q.explanation);
    explain.innerHTML = msg;
  });
  toggleAnswersBtn.textContent = "Ẩn đáp án";
}

function hideAnswerKey() {
  const cards = document.querySelectorAll(".question-card");
  cards.forEach((card) => {
    const explain = card.querySelector(".explain");
    explain.innerHTML = "";
  });
  toggleAnswersBtn.textContent = "Hiện đáp án";
}

// ================== KHỞI TẠO & SỰ KIỆN ==================
function init() {
  populateBankSelect();
  currentBank = questionBanks[0];
  bankSelect.value = currentBank.id;

  populateChapterFilter();
  currentMode = "practice";
  modeSelect.value = "practice";

  updateModeUI();
  renderQuestions();

  bankSelect.addEventListener("change", () => {
    const selectedId = bankSelect.value;
    const bank = questionBanks.find((b) => b.id === selectedId);
    if (bank) {
      currentBank = bank;
      populateChapterFilter();
      updateModeUI();
      renderQuestions();
    }
  });

  modeSelect.addEventListener("change", () => {
    currentMode = modeSelect.value;
    // chuyển chế độ thì tắt 20 câu ngẫu nhiên cho chắc
    if (currentMode === "exam" && randomMode) {
      randomMode.checked = false;
    }
    updateModeUI();
    renderQuestions();
  });

  chapterFilter.addEventListener("change", () => {
    if (currentMode === "practice") {
      renderQuestions();
    }
  });

  if (randomMode) {
    randomMode.addEventListener("change", () => {
      if (currentMode === "practice") {
        renderQuestions();
      }
    });
  }

  checkBtn.addEventListener("click", () => {
    checkAnswers();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  resetBtn.addEventListener("click", () => {
    // Nếu thi thử hoặc luyện tập 20 câu ngẫu nhiên -> sinh đề mới
    if (
      currentMode === "exam" ||
      (currentMode === "practice" && randomMode && randomMode.checked)
    ) {
      renderQuestions();
    } else {
      // Luyện tập bình thường -> giữ bộ câu hỏi, chỉ xóa chọn
      softResetQuiz();
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  toggleAnswersBtn.addEventListener("click", () => {
    answerKeyVisible = !answerKeyVisible;
    if (answerKeyVisible) {
      showAnswerKey();
    } else {
      hideAnswerKey();
    }
  });
}

init();
