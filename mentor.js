// Global variables
        let currentTab = 'dashboard';
        let students = [];
        let notifications = [];
        let filteredStudents = [];

        // Mock data
        const mockStudents = [
            {
                id: 1,
                name: "Alice Johnson",
                studentId: "ST001",
                riskLevel: "high",
                riskScore: 0.85,
                attendance: 65,
                avgGrade: 2.1,
                lastAssessment: 45,
                course: "Computer Science",
                semester: 3,
                mentorId: "M001",
                mentorName: "Dr. Smith",
                contactInfo: { email: "alice.j@university.edu", phone: "+1234567890" },
                recentActivity: "Missed 3 consecutive classes"
            },
            {
                id: 2,
                name: "Bob Chen",
                studentId: "ST002",
                riskLevel: "medium",
                riskScore: 0.62,
                attendance: 78,
                avgGrade: 2.8,
                lastAssessment: 72,
                course: "Engineering",
                semester: 2,
                mentorId: "M002",
                mentorName: "Prof. Davis",
                contactInfo: { email: "bob.c@university.edu", phone: "+1234567891" },
                recentActivity: "Grade improvement noted"
            },
            {
                id: 3,
                name: "Carol Williams",
                studentId: "ST003",
                riskLevel: "low",
                riskScore: 0.23,
                attendance: 92,
                avgGrade: 3.6,
                lastAssessment: 88,
                course: "Mathematics",
                semester: 4,
                mentorId: "M003",
                mentorName: "Dr. Johnson",
                contactInfo: { email: "carol.w@university.edu", phone: "+1234567892" },
                recentActivity: "Consistent high performance"
            },
            {
                id: 4,
                name: "David Rodriguez",
                studentId: "ST004",
                riskLevel: "high",
                riskScore: 0.78,
                attendance: 58,
                avgGrade: 1.9,
                lastAssessment: 52,
                course: "Business Administration",
                semester: 1,
                mentorId: "M001",
                mentorName: "Dr. Smith",
                contactInfo: { email: "david.r@university.edu", phone: "+1234567893" },
                recentActivity: "Failed two recent exams"
            },
            {
                id: 5,
                name: "Emma Thompson",
                studentId: "ST005",
                riskLevel: "low",
                riskScore: 0.31,
                attendance: 89,
                avgGrade: 3.4,
                lastAssessment: 82,
                course: "Biology",
                semester: 3,
                mentorId: "M004",
                mentorName: "Prof. Anderson",
                contactInfo: { email: "emma.t@university.edu", phone: "+1234567894" },
                recentActivity: "Active in study groups"
            },
            {
                id: 6,
                name: "Frank Miller",
                studentId: "ST006",
                riskLevel: "medium",
                riskScore: 0.58,
                attendance: 72,
                avgGrade: 2.6,
                lastAssessment: 68,
                course: "Chemistry",
                semester: 2,
                mentorId: "M005",
                mentorName: "Dr. Wilson",
                contactInfo: { email: "frank.m@university.edu", phone: "+1234567895" },
                recentActivity: "Struggling with lab work"
            },
            {
                id: 7,
                name: "Grace Lee",
                studentId: "ST007",
                riskLevel: "low",
                riskScore: 0.19,
                attendance: 95,
                avgGrade: 3.8,
                lastAssessment: 94,
                course: "Physics",
                semester: 4,
                mentorId: "M003",
                mentorName: "Dr. Johnson",
                contactInfo: { email: "grace.l@university.edu", phone: "+1234567896" },
                recentActivity: "Top performer in class"
            },
            {
                id: 8,
                name: "Hassan Ali",
                studentId: "ST008",
                riskLevel: "high",
                riskScore: 0.82,
                attendance: 61,
                avgGrade: 2.0,
                lastAssessment: 48,
                course: "Engineering",
                semester: 2,
                mentorId: "M002",
                mentorName: "Prof. Davis",
                contactInfo: { email: "hassan.a@university.edu", phone: "+1234567897" },
                recentActivity: "Multiple assignment delays"
            },
            {
                id: 9,
                name: "Isabella Garcia",
                studentId: "ST009",
                riskLevel: "medium",
                riskScore: 0.45,
                attendance: 83,
                avgGrade: 3.1,
                lastAssessment: 76,
                course: "Literature",
                semester: 3,
                mentorId: "M006",
                mentorName: "Prof. Martinez",
                contactInfo: { email: "isabella.g@university.edu", phone: "+1234567898" },
                recentActivity: "Improved essay writing"
            },
            {
                id: 10,
                name: "Jack O'Connor",
                studentId: "ST010",
                riskLevel: "medium",
                riskScore: 0.52,
                attendance: 76,
                avgGrade: 2.7,
                lastAssessment: 71,
                course: "History",
                semester: 1,
                mentorId: "M007",
                mentorName: "Dr. Thompson",
                contactInfo: { email: "jack.o@university.edu", phone: "+1234567899" },
                recentActivity: "Needs better time management"
            },
            {
                id: 11,
                name: "Kanya Patel",
                studentId: "ST011",
                riskLevel: "low",
                riskScore: 0.26,
                attendance: 91,
                avgGrade: 3.5,
                lastAssessment: 87,
                course: "Computer Science",
                semester: 4,
                mentorId: "M001",
                mentorName: "Dr. Smith",
                contactInfo: { email: "kanya.p@university.edu", phone: "+1234567800" },
                recentActivity: "Excellent coding projects"
            },
            {
                id: 12,
                name: "Liam Brown",
                studentId: "ST012",
                riskLevel: "high",
                riskScore: 0.73,
                attendance: 64,
                avgGrade: 2.2,
                lastAssessment: 56,
                course: "Psychology",
                semester: 2,
                mentorId: "M008",
                mentorName: "Dr. Clark",
                contactInfo: { email: "liam.b@university.edu", phone: "+1234567801" },
                recentActivity: "Attendance issues affecting grades"
            },
            {
                id: 13,
                name: "Maya Singh",
                studentId: "ST013",
                riskLevel: "low",
                riskScore: 0.22,
                attendance: 94,
                avgGrade: 3.7,
                lastAssessment: 91,
                course: "Mathematics",
                semester: 3,
                mentorId: "M003",
                mentorName: "Dr. Johnson",
                contactInfo: { email: "maya.s@university.edu", phone: "+1234567802" },
                recentActivity: "Tutoring other students"
            },
            {
                id: 14,
                name: "Noah Kim",
                studentId: "ST014",
                riskLevel: "medium",
                riskScore: 0.48,
                attendance: 81,
                avgGrade: 2.9,
                lastAssessment: 74,
                course: "Art & Design",
                semester: 1,
                mentorId: "M009",
                mentorName: "Prof. Roberts",
                contactInfo: { email: "noah.k@university.edu", phone: "+1234567803" },
                recentActivity: "Creative but inconsistent"
            },
            {
                id: 15,
                name: "Olivia White",
                studentId: "ST015",
                riskLevel: "medium",
                riskScore: 0.55,
                attendance: 74,
                avgGrade: 2.5,
                lastAssessment: 69,
                course: "Sociology",
                semester: 2,
                mentorId: "M010",
                mentorName: "Dr. Lewis",
                contactInfo: { email: "olivia.w@university.edu", phone: "+1234567804" },
                recentActivity: "Participation declined recently"
            },
            {
                id: 16,
                name: "Peter Zhang",
                studentId: "ST016",
                riskLevel: "low",
                riskScore: 0.18,
                attendance: 96,
                avgGrade: 3.9,
                lastAssessment: 96,
                course: "Engineering",
                semester: 4,
                mentorId: "M002",
                mentorName: "Prof. Davis",
                contactInfo: { email: "peter.z@university.edu", phone: "+1234567805" },
                recentActivity: "Outstanding research project"
            },
            {
                id: 17,
                name: "Quinn Taylor",
                studentId: "ST017",
                riskLevel: "high",
                riskScore: 0.79,
                attendance: 59,
                avgGrade: 1.8,
                lastAssessment: 44,
                course: "Economics",
                semester: 1,
                mentorId: "M011",
                mentorName: "Prof. Green",
                contactInfo: { email: "quinn.t@university.edu", phone: "+1234567806" },
                recentActivity: "Struggling with course concepts"
            },
            {
                id: 18,
                name: "Rachel Adams",
                studentId: "ST018",
                riskLevel: "medium",
                riskScore: 0.41,
                attendance: 85,
                avgGrade: 3.2,
                lastAssessment: 79,
                course: "Biology",
                semester: 3,
                mentorId: "M004",
                mentorName: "Prof. Anderson",
                contactInfo: { email: "rachel.a@university.edu", phone: "+1234567807" },
                recentActivity: "Strong lab performance"
            },
            {
                id: 19,
                name: "Samuel Johnson",
                studentId: "ST019",
                riskLevel: "low",
                riskScore: 0.29,
                attendance: 88,
                avgGrade: 3.3,
                lastAssessment: 84,
                course: "Philosophy",
                semester: 2,
                mentorId: "M012",
                mentorName: "Dr. Harris",
                contactInfo: { email: "samuel.j@university.edu", phone: "+1234567808" },
                recentActivity: "Thoughtful class discussions"
            },
            {
                id: 20,
                name: "Tara Wilson",
                studentId: "ST020",
                riskLevel: "medium",
                riskScore: 0.61,
                attendance: 69,
                avgGrade: 2.4,
                lastAssessment: 65,
                course: "Music",
                semester: 1,
                mentorId: "M013",
                mentorName: "Prof. Cooper",
                contactInfo: { email: "tara.w@university.edu", phone: "+1234567809" },
                recentActivity: "Talented but unfocused"
            }
        ];

        const mockNotifications = [
            {
                id: 1,
                type: "urgent",
                message: "Alice Johnson has been absent for 3 consecutive days",
                timestamp: "2024-09-17 09:30",
                studentId: 1
            },
            {
                id: 2,
                type: "warning",
                message: "Bob Chen's assessment score dropped by 15%",
                timestamp: "2024-09-17 14:22",
                studentId: 2
            },
            {
                id: 3,
                type: "info",
                message: "Monthly risk assessment completed for all students",
                timestamp: "2024-09-17 16:45",
                studentId: null
            }
        ];

        // Theme Management
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        // Check for saved theme preference or default to light mode
        const currentTheme = localStorage.getItem('theme') || 'light';
        if (currentTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }

        function toggleTheme() {
            const isDark = body.getAttribute('data-theme') === 'dark';
            
            if (isDark) {
                body.removeAttribute('data-theme');
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            }
        }

        themeToggle.addEventListener('click', toggleTheme);

        // Initialize the dashboard
        function init() {
            students = [...mockStudents];
            notifications = [...mockNotifications];
            filteredStudents = [...students];

            setupEventListeners();
            updateStats();
            renderNotifications();
            renderStudents();
            setupPredictionForm();
            renderAnalytics();
        }

        // Setup event listeners
        function setupEventListeners() {
            // Tab navigation
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.addEventListener('click', (e) => {
                    const tabName = e.target.closest('.nav-tab').dataset.tab;
                    switchTab(tabName);
                });
            });

            // Risk filter
            document.getElementById('risk-filter').addEventListener('change', (e) => {
                filterStudents(e.target.value);
            });

            // Export button
            document.querySelector('.btn-export').addEventListener('click', exportReport);
        }

        // Switch tabs
        function switchTab(tabName) {
            // Update active tab
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

            // Hide all tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.add('hidden');
            });

            // Show selected tab content
            document.getElementById(`${tabName}-tab`).classList.remove('hidden');

            currentTab = tabName;
        }

        // Update statistics
        function updateStats() {
            const stats = {
                total: students.length,
                high: students.filter(s => s.riskLevel === 'high').length,
                medium: students.filter(s => s.riskLevel === 'medium').length,
                low: students.filter(s => s.riskLevel === 'low').length
            };

            document.getElementById('total-students').textContent = stats.total;
            document.getElementById('high-risk-students').textContent = stats.high;
            document.getElementById('medium-risk-students').textContent = stats.medium;
            document.getElementById('low-risk-students').textContent = stats.low;
        }

        // Render notifications
        function renderNotifications() {
            const notificationsList = document.getElementById('notifications-list');
            notificationsList.innerHTML = '';

            notifications.forEach(notification => {
                const notificationElement = document.createElement('div');
                notificationElement.className = `notification-item notification-${notification.type}`;
                notificationElement.innerHTML = `
                    <div class="notification-message">${notification.message}</div>
                    <div class="notification-time">${notification.timestamp}</div>
                `;
                notificationsList.appendChild(notificationElement);
            });
        }

        // Filter students
        function filterStudents(riskLevel) {
            if (riskLevel === 'all') {
                filteredStudents = [...students];
            } else {
                filteredStudents = students.filter(student => student.riskLevel === riskLevel);
            }
            renderStudents();
        }

        // Render students
        function renderStudents() {
            const studentsGrid = document.getElementById('students-grid');
            studentsGrid.innerHTML = '';

            filteredStudents.forEach(student => {
                const studentCard = document.createElement('div');
                studentCard.className = 'student-card';
                studentCard.innerHTML = `
                    <div class="student-header">
                        <div class="student-info">
                            <div class="student-avatar">
                                👤
                            </div>
                            <div class="student-details">
                                <h3>${student.name}</h3>
                                <p>${student.studentId} • ${student.course}</p>
                            </div>
                        </div>
                        <span class="risk-badge risk-${student.riskLevel}">
                            ${student.riskLevel.toUpperCase()}
                        </span>
                    </div>

                    <div class="student-metrics">
                        <div class="metric attendance">
                            <div class="metric-value">${student.attendance}%</div>
                            <div class="metric-label">Attendance</div>
                        </div>
                        <div class="metric grade">
                            <div class="metric-value">${student.avgGrade}</div>
                            <div class="metric-label">Avg Grade</div>
                        </div>
                        <div class="metric risk-score">
                            <div class="metric-value">${Math.round(student.riskScore * 100)}%</div>
                            <div class="metric-label">Risk Score</div>
                        </div>
                    </div>

                    <div style="margin-bottom: 16px; font-size: 14px;">
                        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                            🎓
                            <span>Semester ${student.semester}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            👨‍🏫
                            <span>Mentor: ${student.mentorName}</span>
                        </div>
                    </div>

                    <div class="student-actions">
                        <button class="btn btn-primary" onclick="viewStudentDetails(${student.id})">
                            👁️
                            View Details
                        </button>
                        <button class="btn btn-success" onclick="connectToMentor(${student.id})">
                            💬
                            Connect Mentor
                        </button>
                    </div>
                `;
                studentsGrid.appendChild(studentCard);
            });
        }

        // Student actions
        function viewStudentDetails(studentId) {
            const student = students.find(s => s.id === studentId);
            alert(`Viewing details for ${student.name}\n\nRisk Level: ${student.riskLevel}\nAttendance: ${student.attendance}%\nGrade: ${student.avgGrade}\nRecent Activity: ${student.recentActivity}`);
        }

        function connectToMentor(studentId) {
            const student = students.find(s => s.id === studentId);
            alert(`Connecting ${student.name} to ${student.mentorName}...`);
        }

        function exportReport() {
            alert('Exporting student report...');
        }

        // Prediction form setup
        function setupPredictionForm() {
            const form = document.getElementById('prediction-form');
            const resetBtn = document.getElementById('reset-btn');

            form.addEventListener('submit', handlePredictionSubmit);
            resetBtn.addEventListener('click', resetPredictionForm);
        }

        // Handle prediction form submission
        async function handlePredictionSubmit(e) {
            e.preventDefault();

            const predictBtn = document.getElementById('predict-btn');
            const resultPlaceholder = document.getElementById('result-placeholder');
            const resultLoading = document.getElementById('result-loading');
            const resultSuccess = document.getElementById('result-success');

            // Show loading state
            predictBtn.disabled = true;
            predictBtn.innerHTML = '<div class="loading-spinner"></div> Processing...';
            resultPlaceholder.classList.add('hidden');
            resultLoading.classList.remove('hidden');
            resultSuccess.classList.add('hidden');

            try {
                // Collect form data
                const formData = new FormData(e.target);
                const data = {
                    age: parseFloat(formData.get('age')),
                    gender: formData.get('gender'),
                    nationality: parseInt(formData.get('nationality')),
                    highschool_score: parseFloat(formData.get('highschool_score')),
                    entrance_exam_score_normalized: parseFloat(formData.get('entrance_exam_score_normalized')),
                    department: formData.get('department') ? parseInt(formData.get('department')) : null,
                    admission_type: formData.get('admission_type') ? parseInt(formData.get('admission_type')) : null,
                    family_income_bracket: formData.get('family_income_bracket') ? parseInt(formData.get('family_income_bracket')) : null,
                    parent_education: parseInt(formData.get('parent_education')),
                    scholarship_status: formData.get('scholarship_status') || null,
                    residence_type: formData.get('residence_type') || null,
                    commute_distance_km: formData.get('commute_distance_km') ? parseFloat(formData.get('commute_distance_km')) : null,
                    department_missing: formData.get('department') ? 0 : 1,
                    admission_type_missing: formData.get('admission_type') ? 0 : 1,
                    backlogs_count_missing: 1,
                    scholarship_status_missing: formData.get('scholarship_status') ? 0 : 1,
                    fee_payment_status_missing: 1,
                    residence_type_missing: formData.get('residence_type') ? 0 : 1,
                    family_income_bracket_missing: formData.get('family_income_bracket') ? 0 : 1,
                    commute_distance_km_missing: formData.get('commute_distance_km') ? 0 : 1
                };

                // Simulate API call
                await simulateAPICall(data);

                // Generate mock prediction result
                const prediction = generateMockPrediction(data);
                displayPredictionResult(prediction);

            } catch (error) {
                console.error('Prediction error:', error);
                alert('Error making prediction. Please try again.');
                resultLoading.classList.add('hidden');
                resultPlaceholder.classList.remove('hidden');
            } finally {
                // Reset button state
                predictBtn.disabled = false;
                predictBtn.innerHTML = '🎯 Predict Risk';
            }
        }

        // Simulate API call
        function simulateAPICall(data) {
            return new Promise(resolve => setTimeout(resolve, 2000));
        }

        // Generate mock prediction
        function generateMockPrediction(data) {
            // Simple mock prediction logic based on scores
            const academicScore = (data.highschool_score + data.entrance_exam_score_normalized) / 2;
            let riskScore = 1 - (academicScore / 100);

            // Add some randomness
            riskScore += (Math.random() - 0.5) * 0.2;
            riskScore = Math.max(0, Math.min(1, riskScore));

            let riskLevel, riskClass;
            if (riskScore > 0.7) {
                riskLevel = 'high';
                riskClass = 'High Risk';
            } else if (riskScore > 0.4) {
                riskLevel = 'medium';
                riskClass = 'Medium Risk';
            } else {
                riskLevel = 'low';
                riskClass = 'Low Risk';
            }

            return {
                prediction: riskScore > 0.5 ? 'dropout' : 'not_dropout',
                probabilities: {
                    dropout: riskScore,
                    not_dropout: 1 - riskScore
                },
                confidence: 0.85 + Math.random() * 0.1,
                risk_level: riskClass,
                riskLevel: riskLevel,
                riskScore: riskScore
            };
        }

        // Display prediction result
        function displayPredictionResult(prediction) {
            const resultLoading = document.getElementById('result-loading');
            const resultSuccess = document.getElementById('result-success');
            const riskLevelBadge = document.getElementById('risk-level-badge');
            const dropoutProbability = document.getElementById('dropout-probability');
            const confidenceScore = document.getElementById('confidence-score');
            const riskProgress = document.getElementById('risk-progress');

            // Hide loading, show results
            resultLoading.classList.add('hidden');
            resultSuccess.classList.remove('hidden');

            // Update result styling based on risk level
            resultSuccess.className = `result-success result-${prediction.riskLevel}`;

            // Update badge
            riskLevelBadge.textContent = prediction.risk_level.toUpperCase();
            riskLevelBadge.className = `risk-badge risk-${prediction.riskLevel}`;

            // Update metrics
            dropoutProbability.textContent = Math.round(prediction.probabilities.dropout * 100) + '%';
            confidenceScore.textContent = Math.round(prediction.confidence * 100) + '%';

            // Update progress bar
            const progressWidth = prediction.probabilities.dropout * 100;
            riskProgress.style.width = progressWidth + '%';

            let progressColor;
            if (prediction.riskLevel === 'high') progressColor = '#ef4444';
            else if (prediction.riskLevel === 'medium') progressColor = '#f59e0b';
            else progressColor = '#10b981';

            riskProgress.style.background = progressColor;

            // Update risk factors
            const factorsList = document.getElementById('risk-factors-list');
            const factors = ['Academic Performance', 'Attendance Pattern', 'Financial Status', 'Family Background'];
            factorsList.innerHTML = factors.map(factor =>
                `<li>🔴 ${factor}</li>`
            ).join('');

            // Update recommendations
            const recommendationsList = document.getElementById('recommendations-list');
            let recommendations;
            if (prediction.riskLevel === 'high') {
                recommendations = [
                    'Schedule immediate academic counseling',
                    'Connect with financial aid office',
                    'Arrange mentor meeting within 48 hours',
                    'Monitor attendance closely'
                ];
            } else if (prediction.riskLevel === 'medium') {
                recommendations = [
                    'Monthly check-in with advisor',
                    'Study group participation',
                    'Regular performance monitoring'
                ];
            } else {
                recommendations = [
                    'Continue current support level',
                    'Quarterly progress review'
                ];
            }

            recommendationsList.innerHTML = recommendations.map(rec =>
                `<li>✅ ${rec}</li>`
            ).join('');
        }

        // Reset prediction form
        function resetPredictionForm() {
            document.getElementById('prediction-form').reset();

            // Reset form to default values
            document.getElementById('age').value = '18';
            document.getElementById('gender').value = 'M';
            document.getElementById('nationality').value = '1';
            document.getElementById('parent_education').value = '1';
            document.getElementById('highschool_score').value = '85';
            document.getElementById('entrance_exam_score_normalized').value = '75';

            // Hide results, show placeholder
            document.getElementById('result-success').classList.add('hidden');
            document.getElementById('result-loading').classList.add('hidden');
            document.getElementById('result-placeholder').classList.remove('hidden');
        }

        // Analytics rendering functions
        function renderAnalytics() {
            renderDonutChart();
            renderRiskBreakdown();
            renderAttendanceBars();
            renderGradeBars();
            renderInterventionBars();
            renderModelPerformanceBars();
            renderFeatureImportanceBars();
            renderTrendChart();
        }

        function renderDonutChart() {
            const stats = {
                total: students.length,
                high: students.filter(s => s.riskLevel === 'high').length,
                medium: students.filter(s => s.riskLevel === 'medium').length,
                low: students.filter(s => s.riskLevel === 'low').length
            };

            // Update counts
            document.getElementById('total-chart-students').textContent = stats.total;
            document.getElementById('high-count').textContent = stats.high;
            document.getElementById('medium-count').textContent = stats.medium;
            document.getElementById('low-count').textContent = stats.low;

            // Create donut chart
            const svg = document.getElementById('donut-chart');
            const centerX = 50;
            const centerY = 50;
            const radius = 30;
            const circumference = 2 * Math.PI * radius;

            let currentOffset = 0;
            const segments = [
                { count: stats.high, color: '#ef4444', label: 'High' },
                { count: stats.medium, color: '#f59e0b', label: 'Medium' },
                { count: stats.low, color: '#10b981', label: 'Low' }
            ];

            // Clear existing segments
            const existingSegments = svg.querySelectorAll('.donut-segment');
            existingSegments.forEach(segment => segment.remove());

            segments.forEach((segment, index) => {
                if (segment.count === 0) return;

                const percentage = segment.count / stats.total;
                const strokeLength = circumference * percentage;

                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.classList.add('donut-segment');
                circle.setAttribute('cx', centerX);
                circle.setAttribute('cy', centerY);
                circle.setAttribute('r', radius);
                circle.setAttribute('fill', 'none');
                circle.setAttribute('stroke', segment.color);
                circle.setAttribute('stroke-width', '8');
                circle.setAttribute('stroke-dasharray', `${strokeLength} ${circumference}`);
                circle.setAttribute('stroke-dashoffset', -currentOffset);
                circle.setAttribute('transform', `rotate(-90 ${centerX} ${centerY})`);

                svg.appendChild(circle);
                currentOffset += strokeLength;
            });
        }

        function renderRiskBreakdown() {
            const stats = {
                total: students.length,
                high: students.filter(s => s.riskLevel === 'high').length,
                medium: students.filter(s => s.riskLevel === 'medium').length,
                low: students.filter(s => s.riskLevel === 'low').length
            };

            const breakdownContainer = document.getElementById('risk-breakdown-bars');
            const items = [
                { level: 'High Risk', count: stats.high, color: '#ef4444', percentage: (stats.high / stats.total) * 100 },
                { level: 'Medium Risk', count: stats.medium, color: '#f59e0b', percentage: (stats.medium / stats.total) * 100 },
                { level: 'Low Risk', count: stats.low, color: '#10b981', percentage: (stats.low / stats.total) * 100 }
            ];

            breakdownContainer.innerHTML = items.map(item => `
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 16px; height: 16px; border-radius: 4px; background: ${item.color};"></div>
                        <span style="font-weight: 500;">${item.level}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 16px;">
                        <div style="width: 120px; background: #e5e7eb; border-radius: 4px; height: 8px;">
                            <div style="height: 8px; border-radius: 4px; background: ${item.color}; width: ${item.percentage}%;"></div>
                        </div>
                        <span style="font-size: 14px; font-weight: 600; width: 24px; text-align: right;">${item.count}</span>
                        <span style="font-size: 14px; color: #6b7280; width: 48px;">(${item.percentage.toFixed(1)}%)</span>
                    </div>
                </div>
            `).join('');
        }

        function renderAttendanceBars() {
            const attendanceRanges = [
                { range: '90-100%', count: students.filter(s => s.attendance >= 90).length, color: '#10b981' },
                { range: '80-89%', count: students.filter(s => s.attendance >= 80 && s.attendance < 90).length, color: '#f59e0b' },
                { range: '70-79%', count: students.filter(s => s.attendance >= 70 && s.attendance < 80).length, color: '#f97316' },
                { range: 'Below 70%', count: students.filter(s => s.attendance < 70).length, color: '#ef4444' }
            ];

            const container = document.getElementById('attendance-bars');
            container.innerHTML = attendanceRanges.map(item => `
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                    <span style="font-size: 14px; font-weight: 500;">${item.range}</span>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 96px; background: #e5e7eb; border-radius: 4px; height: 8px;">
                            <div style="height: 8px; border-radius: 4px; background: ${item.color}; width: ${(item.count / students.length) * 100}%;"></div>
                        </div>
                        <span style="font-size: 14px; width: 16px; text-align: right;">${item.count}</span>
                    </div>
                </div>
            `).join('');
        }

        function renderGradeBars() {
            const gradeRanges = [
                { range: 'A (3.5-4.0)', count: students.filter(s => s.avgGrade >= 3.5).length, color: '#10b981' },
                { range: 'B (2.5-3.4)', count: students.filter(s => s.avgGrade >= 2.5 && s.avgGrade < 3.5).length, color: '#3b82f6' },
                { range: 'C (2.0-2.4)', count: students.filter(s => s.avgGrade >= 2.0 && s.avgGrade < 2.5).length, color: '#f59e0b' },
                { range: 'D (<2.0)', count: students.filter(s => s.avgGrade < 2.0).length, color: '#ef4444' }
            ];

            const container = document.getElementById('grade-bars');
            container.innerHTML = gradeRanges.map(item => `
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                    <span style="font-size: 14px; font-weight: 500;">${item.range}</span>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 96px; background: #e5e7eb; border-radius: 4px; height: 8px;">
                            <div style="height: 8px; border-radius: 4px; background: ${item.color}; width: ${(item.count / students.length) * 100}%;"></div>
                        </div>
                        <span style="font-size: 14px; width: 16px; text-align: right;">${item.count}</span>
                    </div>
                </div>
            `).join('');
        }

        function renderInterventionBars() {
            const interventionTypes = [
                { type: 'Academic Support', success: 85, total: 24 },
                { type: 'Mentor Meetings', success: 72, total: 31 },
                { type: 'Counseling', success: 68, total: 19 },
                { type: 'Financial Aid', success: 91, total: 12 }
            ];

            const container = document.getElementById('intervention-bars');
            container.innerHTML = interventionTypes.map(item => `
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                    <span style="font-size: 14px; font-weight: 500;">${item.type}</span>
                    <div style="display: flex; align-items: center; gap: 16px;">
                        <div style="width: 120px; background: #e5e7eb; border-radius: 4px; height: 8px;">
                            <div style="height: 8px; background: #10b981; border-radius: 4px; width: ${item.success}%;"></div>
                        </div>
                        <span style="font-size: 14px; color: #6b7280;">${item.success}% (${item.total} cases)</span>
                    </div>
                </div>
            `).join('');
        }

        function renderModelPerformanceBars() {
            const metrics = [
                { name: 'Overall Accuracy', value: 87.3, color: '#3b82f6' },
                { name: 'High Risk Precision', value: 82.1, color: '#ef4444' },
                { name: 'High Risk Recall', value: 79.4, color: '#ef4444' }
            ];

            const container = document.getElementById('model-performance-bars');
            container.innerHTML = metrics.map(item => `
                <div style="margin-bottom: 16px;">
                    <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 8px;">
                        <span>${item.name}</span>
                        <span style="font-weight: 600;">${item.value}%</span>
                    </div>
                    <div style="width: 100%; background: #e5e7eb; border-radius: 4px; height: 8px;">
                        <div style="height: 8px; background: ${item.color}; border-radius: 4px; width: ${item.value}%;"></div>
                    </div>
                </div>
            `).join('');
        }

        function renderFeatureImportanceBars() {
            const features = [
                { feature: 'Attendance Rate', importance: 0.24 },
                { feature: 'Previous Grades', importance: 0.19 },
                { feature: 'Assignment Completion', importance: 0.15 },
                { feature: 'Financial Status', importance: 0.12 },
                { feature: 'Course Difficulty', importance: 0.10 },
                { feature: 'Study Hours', importance: 0.08 }
            ];

            const container = document.getElementById('feature-importance-bars');
            container.innerHTML = features.map(item => `
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                    <span style="font-size: 14px;">${item.feature}</span>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 96px; background: #e5e7eb; border-radius: 4px; height: 8px;">
                            <div style="height: 8px; background: #7c3aed; border-radius: 4px; width: ${item.importance * 100}%;"></div>
                        </div>
                        <span style="font-size: 12px; color: #6b7280; width: 40px; text-align: right;">
                            ${(item.importance * 100).toFixed(1)}%
                        </span>
                    </div>
                </div>
            `).join('');
        }

        function renderTrendChart() {
            const svg = document.getElementById('trend-chart');

            // Clear existing trend lines
            const existingLines = svg.querySelectorAll('.trend-line');
            existingLines.forEach(line => line.remove());

            // Sample data for 6 months (high, medium, low risk trends)
            const trendData = {
                high: [30, 28, 26, 24, 22, 20],
                medium: [40, 42, 45, 44, 46, 48],
                low: [30, 30, 29, 32, 32, 32]
            };

            const colors = {
                high: '#ef4444',
                medium: '#f59e0b',
                low: '#10b981'
            };

            Object.keys(trendData).forEach(riskLevel => {
                const points = trendData[riskLevel].map((value, index) => ({
                    x: index * 80,
                    y: 120 - (value / 50 * 120) // Scale to chart height
                }));

                const pathData = points.map((point, index) =>
                    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
                ).join(' ');

                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.classList.add('trend-line');
                path.setAttribute('d', pathData);
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', colors[riskLevel]);
                path.setAttribute('stroke-width', '2');

                svg.appendChild(path);
            });
        }

        // Initialize the dashboard when the page loads
        document.addEventListener('DOMContentLoaded', init);