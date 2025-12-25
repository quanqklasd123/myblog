const blogData = {
    java: [
        {
            id: 1,
            title: "1. Lập trình hướng đối tượng (OOP) trong Java: Từ Cơ Bản Đến Nâng Cao",
            date: "23/12/2025",
            topic: "Java Core",
            description: "Khám phá sâu hơn về 4 trụ cột của OOP và cách áp dụng chúng hiệu quả trong các dự án thực tế. Tìm hiểu về SOLID principles.",
            content: `
                <p>Lập trình hướng đối tượng (OOP) không chỉ là về Class và Object. Để trở thành một Senior Java Developer, bạn cần hiểu sâu sắc về cách thiết kế hệ thống linh hoạt và dễ bảo trì.</p>
                
                <h3>1. Tính Đóng Gói (Encapsulation) & Data Hiding</h3>
                <p>Không chỉ đơn giản là <code>private</code> fields và <code>public</code> getters/setters. Đóng gói thực sự là về việc bảo vệ <strong>invariant</strong> (bất biến) của đối tượng. Hãy suy nghĩ kỹ trước khi tạo setter cho mọi trường.</p>
                <pre><code>// Bad Practice
public class BankAccount {
    public double balance;
}

// Good Practice
public class BankAccount {
    private double balance;
    
    public void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Amount must be positive");
        this.balance += amount;
    }
}</code></pre>

                <h3>2. Tính Kế Thừa (Inheritance) vs. Composition</h3>
                <p>Kế thừa là một con dao hai lưỡi. "Favor Composition over Inheritance" (Ưu tiên Composition hơn Kế thừa) là một nguyên tắc quan trọng. Kế thừa tạo ra sự kết dính chặt chẽ (tight coupling), trong khi Composition mang lại sự linh hoạt.</p>

                <h3>3. Tính Đa Hình (Polymorphism)</h3>
                <p>Sức mạnh thực sự của Java nằm ở Runtime Polymorphism (Dynamic Binding). Điều này cho phép chúng ta viết code phụ thuộc vào Interface thay vì Implementation cụ thể, giúp hệ thống dễ mở rộng (Open/Closed Principle).</p>

                <h3>4. SOLID Principles</h3>
                <ul>
                    <li><strong>S</strong>ingle Responsibility Principle (SRP): Một class chỉ nên có một lý do để thay đổi.</li>
                    <li><strong>O</strong>pen/Closed Principle (OCP): Mở rộng thì dễ, sửa đổi thì hạn chế.</li>
                    <li><strong>L</strong>iskov Substitution Principle (LSP): Class con phải thay thế được class cha mà không làm hỏng chương trình.</li>
                    <li><strong>I</strong>nterface Segregation Principle (ISP): Chia nhỏ interface lớn thành nhiều interface nhỏ.</li>
                    <li><strong>D</strong>ependency Inversion Principle (DIP): Phụ thuộc vào abstraction, không phụ thuộc vào concrete class.</li>
                </ul>
            `
        },
        {
            id: 2,
            title: "2. Java Collections Framework: Tối Ưu Hóa Hiệu Năng",
            date: "22/12/2025",
            topic: "Java Core",
            description: "Phân tích sâu về độ phức tạp thuật toán (Big O) của các Collections phổ biến. Khi nào dùng ArrayList, LinkedList, HashSet hay TreeSet?",
            content: `
                <p>Chọn sai cấu trúc dữ liệu có thể giết chết hiệu năng ứng dụng của bạn. Hãy cùng phân tích sâu hơn.</p>

                <h3>List: ArrayList vs. LinkedList</h3>
                <ul>
                    <li><strong>ArrayList:</strong> Dựa trên mảng động. Truy cập ngẫu nhiên (get) cực nhanh O(1). Thêm/xóa ở cuối nhanh, nhưng ở giữa/đầu thì chậm O(n) do phải dịch chuyển phần tử. <em>Dùng cho 90% trường hợp.</em></li>
                    <li><strong>LinkedList:</strong> Dựa trên danh sách liên kết đôi. Thêm/xóa cực nhanh O(1) nếu đã có reference. Truy cập ngẫu nhiên chậm O(n). <em>Chỉ dùng khi thêm/xóa nhiều ở đầu/giữa list.</em></li>
                </ul>

                <h3>Set & Map: Hashing là chìa khóa</h3>
                <p><code>HashSet</code> và <code>HashMap</code> hoạt động dựa trên <code>hashCode()</code> và <code>equals()</code>. Nếu bạn dùng custom object làm key, hãy chắc chắn override 2 method này đúng cách để tránh Memory Leak hoặc mất dữ liệu.</p>
                <p>Độ phức tạp trung bình cho add/remove/contains là O(1). Tuy nhiên, trong trường hợp xấu nhất (hash collision), nó có thể tệ xuống O(n) (hoặc O(log n) từ Java 8 trở đi do sử dụng Red-Black Tree).</p>

                <h3>Concurrent Collections</h3>
                <p>Trong môi trường đa luồng, đừng dùng <code>ArrayList</code> hay <code>HashMap</code>. Hãy dùng:</p>
                <ul>
                    <li><code>CopyOnWriteArrayList</code>: Tốt cho việc đọc nhiều, ghi ít.</li>
                    <li><code>ConcurrentHashMap</code>: Thread-safe map với hiệu năng cao nhờ cơ chế lock striping (chia nhỏ lock).</li>
                </ul>
            `
        },
        {
            id: 3,
            title: "3. Xử lý Ngoại Lệ (Exception Handling): Best Practices",
            date: "21/12/2025",
            topic: "Java Core",
            description: "Làm sao để xử lý lỗi mà không làm 'rác' code? Tìm hiểu về Checked vs Unchecked Exceptions, Try-with-resources và Custom Exceptions.",
            content: `
                <p>Exception handling không chỉ là <code>try-catch</code>. Nó là về việc thiết kế luồng lỗi của ứng dụng.</p>

                <h3>Checked vs. Unchecked Exceptions</h3>
                <ul>
                    <li><strong>Checked (Exception):</strong> Bắt buộc phải xử lý (compile-time). Dùng cho các lỗi có thể phục hồi được (ví dụ: File not found, Network error).</li>
                    <li><strong>Unchecked (RuntimeException):</strong> Lỗi do lập trình viên (NullPointer, IndexOutOfBounds). Nên fix bug thay vì catch.</li>
                </ul>

                <h3>Try-with-resources (Java 7+)</h3>
                <p>Luôn sử dụng try-with-resources khi làm việc với IO, Database connection để đảm bảo tài nguyên được đóng tự động, tránh Memory Leak.</p>
                <pre><code>try (BufferedReader br = new BufferedReader(new FileReader(path))) {
    return br.readLine();
} catch (IOException e) {
    log.error("Failed to read file", e);
    throw new MyCustomException("File read error", e);
}</code></pre>

                <h3>Anti-patterns cần tránh</h3>
                <ul>
                    <li><strong>Swallowing Exceptions:</strong> Catch xong để trống hoặc chỉ in ra console rồi bỏ qua. Hãy log hoặc throw lại.</li>
                    <li><strong>Catching Exception/Throwable:</strong> Quá chung chung, có thể bắt nhầm cả RuntimeException hoặc Error.</li>
                    <li><strong>Log and Throw:</strong> Vừa log lỗi vừa ném tiếp, gây ra log trùng lặp ở các tầng trên.</li>
                </ul>
            `
        },
        {
            id: 4,
            title: "4. Đa luồng & Concurrency: Từ Thread đến Virtual Threads",
            date: "20/12/2025",
            topic: "Java Advanced",
            description: "Cập nhật mới nhất về lập trình đa luồng trong Java. ExecutorService, CompletableFuture và cuộc cách mạng Virtual Threads trong Java 21.",
            content: `
                <p>Kỷ nguyên của việc tạo <code>new Thread()</code> thủ công đã qua. Java hiện đại cung cấp các công cụ mạnh mẽ hơn nhiều.</p>

                <h3>ExecutorService</h3>
                <p>Quản lý Thread Pool thay vì tạo thread vô tội vạ. Giúp kiểm soát số lượng thread, tái sử dụng thread, tránh OutOfMemoryError.</p>

                <h3>CompletableFuture (Java 8)</h3>
                <p>Viết code bất đồng bộ theo phong cách Functional. Dễ dàng combine, chain các tác vụ async lại với nhau mà không bị "Callback Hell".</p>

                <h3>Virtual Threads (Java 21 - Project Loom)</h3>
                <p>Đây là game changer! Virtual Threads là các thread siêu nhẹ (lightweight), được quản lý bởi JVM chứ không phải OS. Bạn có thể tạo hàng triệu virtual threads mà không lo tốn RAM.</p>
                <p>Nó giúp mô hình "Thread-per-request" trở lại ngôi vương, thay thế cho Reactive Programming phức tạp trong nhiều trường hợp.</p>
                <pre><code>try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    IntStream.range(0, 10_000).forEach(i -> {
        executor.submit(() -> {
            Thread.sleep(Duration.ofSeconds(1));
            return i;
        });
    });
}</code></pre>
            `
        },
        {
            id: 5,
            title: "5. Spring Boot 3 & Spring Framework 6: Những Điểm Mới",
            date: "19/12/2025",
            topic: "Java Framework",
            description: "Cập nhật các tính năng mới nhất trong hệ sinh thái Spring. Native Image với GraalVM, Observability, và Java 17 baseline.",
            content: `
                <p>Spring Boot 3 đánh dấu một bước ngoặt lớn với việc yêu cầu tối thiểu Java 17.</p>

                <h3>1. Hỗ trợ Native Image (GraalVM)</h3>
                <p>Spring Boot 3 hỗ trợ biên dịch ứng dụng Java thành file binary native (AOT compilation). Kết quả: thời gian khởi động siêu nhanh (vài ms) và tốn cực ít RAM. Rất phù hợp cho Serverless và Kubernetes.</p>

                <h3>2. Observability (Micrometer Tracing)</h3>
                <p>Tích hợp sẵn Micrometer Tracing, giúp việc theo dõi (tracing) các request qua các microservices trở nên dễ dàng hơn bao giờ hết. Tự động tạo Trace ID, Span ID cho log.</p>

                <h3>3. Declarative HTTP Client</h3>
                <p>Định nghĩa HTTP Client bằng Interface (giống Retrofit hay Feign) ngay trong Spring Framework core.</p>
                <pre><code>@HttpExchange("/users")
public interface UserClient {
    @GetExchange("/{id}")
    User getUser(@PathVariable Long id);
}</code></pre>
            `
        }
    ],
    javascript: [
        {
            id: 1,
            title: "1. DOM & Virtual DOM: Hiểu Để Tối Ưu React/Vue",
            date: "23/12/2025",
            topic: "JavaScript Basic",
            description: "Tại sao thao tác DOM trực tiếp lại chậm? Virtual DOM giải quyết vấn đề gì? Hiểu sâu về Reflow và Repaint.",
            content: `
                <p>Thao tác DOM (Document Object Model) là một trong những tác vụ tốn kém nhất về hiệu năng trong trình duyệt.</p>

                <h3>Reflow và Repaint</h3>
                <ul>
                    <li><strong>Reflow (Layout):</strong> Trình duyệt tính toán lại vị trí và kích thước của các phần tử. Xảy ra khi thay đổi layout (width, height, margin...). Rất tốn kém!</li>
                    <li><strong>Repaint:</strong> Trình duyệt vẽ lại các pixel. Xảy ra khi thay đổi màu sắc, visibility... Nhẹ hơn Reflow nhưng vẫn tốn.</li>
                </ul>

                <h3>Tại sao cần Virtual DOM (React/Vue)?</h3>
                <p>Thay vì thao tác trực tiếp lên DOM thật mỗi khi dữ liệu thay đổi, các framework hiện đại sử dụng Virtual DOM (một bản sao của DOM trong bộ nhớ).</p>
                <ol>
                    <li>Thay đổi xảy ra trên Virtual DOM.</li>
                    <li>Thuật toán "Diffing" so sánh Virtual DOM mới và cũ để tìm ra sự khác biệt tối thiểu.</li>
                    <li>Chỉ cập nhật những phần thay đổi đó lên DOM thật (Batch update).</li>
                </ol>
                <p>Điều này giảm thiểu số lần Reflow/Repaint, tăng mượt mà cho UI.</p>
            `
        },
        {
            id: 2,
            title: "2. ES6+ Cheatsheet: Viết Code JS Hiện Đại & Gọn Gàng",
            date: "22/12/2025",
            topic: "JavaScript Modern",
            description: "Tổng hợp các tính năng ES mới nhất bạn nên dùng: Optional Chaining, Nullish Coalescing, Logical Assignment Operators...",
            content: `
                <p>JavaScript phát triển rất nhanh. Đừng viết code kiểu cũ nữa!</p>

                <h3>Optional Chaining (<code>?.</code>)</h3>
                <p>Truy cập thuộc tính lồng nhau an toàn mà không cần check null từng cấp.</p>
                <pre><code>const street = user?.address?.street; // Trả về undefined nếu user hoặc address null</code></pre>

                <h3>Nullish Coalescing (<code>??</code>)</h3>
                <p>Tốt hơn toán tử OR (<code>||</code>) khi xử lý giá trị mặc định. Chỉ nhận giá trị mặc định khi vế trái là <code>null</code> hoặc <code>undefined</code> (không tính 0 hay chuỗi rỗng).</p>
                <pre><code>const count = inputCount ?? 10; // Nếu inputCount là 0, count vẫn là 0. Dùng || thì count sẽ là 10.</code></pre>

                <h3>Object Destructuring & Spread Operator</h3>
                <pre><code>const { name, ...rest } = user; // Lấy name, các field còn lại đưa vào rest
const newUser = { ...user, role: 'admin' }; // Clone user và ghi đè role</code></pre>
            `
        },
        {
            id: 3,
            title: "3. Asynchronous JavaScript: Từ Callback Hell đến Top-level Await",
            date: "21/12/2025",
            topic: "JavaScript Advanced",
            description: "Làm chủ bất đồng bộ. Promise.all vs allSettled vs race vs any. Top-level await trong Modules.",
            content: `
                <h3>Promise Combinators</h3>
                <p>Khi bạn có nhiều promises chạy song song:</p>
                <ul>
                    <li><strong>Promise.all([p1, p2]):</strong> Chờ tất cả xong. Nếu 1 cái lỗi, tất cả toang (reject). Dùng khi các task phụ thuộc nhau.</li>
                    <li><strong>Promise.allSettled([p1, p2]):</strong> Chờ tất cả xong, bất kể thành công hay thất bại. Trả về mảng trạng thái. Rất hữu ích để lấy dữ liệu từ nhiều nguồn độc lập.</li>
                    <li><strong>Promise.race([p1, p2]):</strong> Lấy kết quả của cái nào xong đầu tiên.</li>
                    <li><strong>Promise.any([p1, p2]):</strong> Lấy cái thành công đầu tiên (bỏ qua lỗi trừ khi tất cả đều lỗi).</li>
                </ul>

                <h3>Top-level Await (ES2022)</h3>
                <p>Giờ đây bạn có thể dùng <code>await</code> ngay cấp cao nhất của module mà không cần bọc trong hàm <code>async</code>.</p>
                <pre><code>// data.js
const response = await fetch('https://api.example.com/data');
export const data = await response.json();</code></pre>
            `
        },
        {
            id: 4,
            title: "4. Closures & Currying: Kỹ Thuật Của Senior JS Dev",
            date: "20/12/2025",
            topic: "JavaScript Advanced",
            description: "Hiểu sâu về Lexical Scope. Ứng dụng Closure để tạo Memoization function và Currying.",
            content: `
                <h3>Memoization với Closure</h3>
                <p>Tối ưu hiệu năng bằng cách ghi nhớ kết quả của các hàm tính toán nặng.</p>
                <pre><code>function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    }
}</code></pre>

                <h3>Currying</h3>
                <p>Biến đổi hàm nhiều tham số thành chuỗi các hàm một tham số. Giúp tái sử dụng code và tạo ra các hàm cấu hình sẵn (partial application).</p>
                <pre><code>const multiply = (a) => (b) => a * b;
const double = multiply(2); // Tạo hàm nhân đôi
console.log(double(5)); // 10</code></pre>
            `
        },
        {
            id: 5,
            title: "5. Event Loop & Microtasks: Bí Mật Của V8 Engine",
            date: "19/12/2025",
            topic: "JavaScript Deep Dive",
            description: "Tại sao setTimeout(fn, 0) không chạy ngay lập tức? Phân biệt Macrotask (Task Queue) và Microtask (Job Queue).",
            content: `
                <p>Để hiểu thứ tự chạy code JS, bạn phải hiểu 2 hàng đợi này:</p>

                <h3>1. Macrotask Queue (Task Queue)</h3>
                <p>Bao gồm: <code>setTimeout</code>, <code>setInterval</code>, <code>setImmediate</code> (Node.js), I/O, UI rendering.</p>

                <h3>2. Microtask Queue (Job Queue)</h3>
                <p>Bao gồm: <code>Promise.then/catch/finally</code>, <code>queueMicrotask</code>, <code>MutationObserver</code>.</p>

                <h3>Quy tắc vàng:</h3>
                <p><strong>Microtask luôn được ưu tiên chạy hết trước khi chuyển sang Macrotask tiếp theo.</strong></p>
                <p>Sau mỗi lần Call Stack rỗng, Event Loop sẽ check Microtask Queue trước. Nếu có, chạy hết sạch chúng, rồi mới lấy 1 cái từ Macrotask Queue ra chạy.</p>

                <pre><code>console.log(1);
setTimeout(() => console.log(2), 0); // Macrotask
Promise.resolve().then(() => console.log(3)); // Microtask
console.log(4);

// Output: 1 -> 4 -> 3 -> 2</code></pre>
            `
        }
    ]
};
