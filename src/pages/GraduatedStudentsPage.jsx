import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const GraduatedStudentsPage = () => {
  // Mock data for graduated students
  const mockStudents = [
    {
      id: 1,
      name: "John Smith",
      graduationYear: 2023,
      department: "Computer Science",
      degree: "Bachelor of Science",
      gpa: 3.8,
      email: "john.smith@university.edu",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      currentPosition: "Software Engineer",
      company: "Tech Innovations Inc.",
      avatar: ""
    },
    {
      id: 2,
      name: "Sarah Johnson",
      graduationYear: 2022,
      department: "Business Administration",
      degree: "Master of Business",
      gpa: 3.9,
      email: "sarah.j@university.edu",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      currentPosition: "Marketing Director",
      company: "Global Enterprises",
      avatar: ""
    },
    {
      id: 3,
      name: "Michael Chen",
      graduationYear: 2023,
      department: "Engineering",
      degree: "Bachelor of Engineering",
      gpa: 3.7,
      email: "michael.chen@university.edu",
      phone: "+1 (555) 345-6789",
      location: "Seattle, WA",
      currentPosition: "Product Manager",
      company: "Innovate Solutions",
      avatar: ""
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      graduationYear: 2021,
      department: "Psychology",
      degree: "Master of Arts",
      gpa: 3.95,
      email: "emily.r@university.edu",
      phone: "+1 (555) 456-7890",
      location: "Miami, FL",
      currentPosition: "Clinical Psychologist",
      company: "Wellness Center",
      avatar: ""
    },
    {
      id: 5,
      name: "David Wilson",
      graduationYear: 2022,
      department: "Finance",
      degree: "Bachelor of Science",
      gpa: 3.6,
      email: "david.w@university.edu",
      phone: "+1 (555) 567-8901",
      location: "Chicago, IL",
      currentPosition: "Financial Analyst",
      company: "Investment Group",
      avatar: ""
    },
    {
      id: 6,
      name: "Lisa Anderson",
      graduationYear: 2023,
      department: "Marketing",
      degree: "Bachelor of Arts",
      gpa: 3.85,
      email: "lisa.a@university.edu",
      phone: "+1 (555) 678-9012",
      location: "Los Angeles, CA",
      currentPosition: "Brand Manager",
      company: "Creative Agency",
      avatar: ""
    },
    {
      id: 7,
      name: "Robert Taylor",
      graduationYear: 2020,
      department: "Computer Science",
      degree: "Master of Science",
      gpa: 3.95,
      email: "robert.t@university.edu",
      phone: "+1 (555) 789-0123",
      location: "Austin, TX",
      currentPosition: "Senior Developer",
      company: "Startup Ventures",
      avatar: ""
    },
    {
      id: 8,
      name: "Jennifer Lee",
      graduationYear: 2023,
      department: "Engineering",
      degree: "Bachelor of Engineering",
      gpa: 3.75,
      email: "jennifer.l@university.edu",
      phone: "+1 (555) 890-1234",
      location: "Boston, MA",
      currentPosition: "Design Engineer",
      company: "Engineering Solutions",
      avatar: ""
    },
    {
      id: 9,
      name: "Thomas Brown",
      graduationYear: 2021,
      department: "Business Administration",
      degree: "Bachelor of Business",
      gpa: 3.65,
      email: "thomas.b@university.edu",
      phone: "+1 (555) 901-2345",
      location: "Denver, CO",
      currentPosition: "Operations Manager",
      company: "Logistics Corp",
      avatar: ""
    },
    {
      id: 10,
      name: "Amanda Davis",
      graduationYear: 2022,
      department: "Psychology",
      degree: "Bachelor of Arts",
      gpa: 3.85,
      email: "amanda.d@university.edu",
      phone: "+1 (555) 012-3456",
      location: "Portland, OR",
      currentPosition: "Research Assistant",
      company: "Research Institute",
      avatar: ""
    },
    {
      id: 11,
      name: "Christopher Miller",
      graduationYear: 2023,
      department: "Finance",
      degree: "Master of Finance",
      gpa: 3.9,
      email: "chris.m@university.edu",
      phone: "+1 (555) 123-4568",
      location: "Washington, DC",
      currentPosition: "Investment Banker",
      company: "Capital Partners",
      avatar: ""
    },
    {
      id: 12,
      name: "Jessica Garcia",
      graduationYear: 2020,
      department: "Marketing",
      degree: "Master of Marketing",
      gpa: 3.8,
      email: "jessica.g@university.edu",
      phone: "+1 (555) 234-5679",
      location: "Phoenix, AZ",
      currentPosition: "Marketing Specialist",
      company: "Digital Marketing Agency",
      avatar: ""
    }
  ];

  // State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Get unique filter options
  const years = [...new Set(mockStudents.map(student => student.graduationYear))].sort((a, b) => b - a);
  const departments = [...new Set(mockStudents.map(student => student.department))].sort();
  const degrees = [...new Set(mockStudents.map(student => student.degree))].sort();

  // Filter and sort students
  const filteredAndSortedStudents = useMemo(() => {
    let result = [...mockStudents];

    // Apply filters
    if (searchTerm) {
      result = result.filter(student => 
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.currentPosition.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedYear) {
      result = result.filter(student => student.graduationYear === parseInt(selectedYear));
    }

    if (selectedDepartment) {
      result = result.filter(student => student.department === selectedDepartment);
    }

    if (selectedDegree) {
      result = result.filter(student => student.degree === selectedDegree);
    }

    // Apply sorting
    result.sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortDirection === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return result;
  }, [searchTerm, selectedYear, selectedDepartment, selectedDegree, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedStudents = filteredAndSortedStudents.slice(startIndex, startIndex + itemsPerPage);

  // Handle sort
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedYear('');
    setSelectedDepartment('');
    setSelectedDegree('');
    setCurrentPage(1);
  };

  // Handle page change
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Graduated Students</h1>
          <p className="text-gray-600">Browse our alumni directory with comprehensive filters and pagination</p>
        </div>

        {/* Filters Section */}
        <Card className="mb-8">
          <Card.Body>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Name, company, position..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                  Graduation Year
                </label>
                <select
                  id="year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select
                  id="department"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-1">
                  Degree
                </label>
                <select
                  id="degree"
                  value={selectedDegree}
                  onChange={(e) => setSelectedDegree(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Degrees</option>
                  {degrees.map(degree => (
                    <option key={degree} value={degree}>{degree}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <Button variant="outline" onClick={resetFilters} className="w-full">
                  Reset Filters
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">
            Showing {paginatedStudents.length} of {filteredAndSortedStudents.length} students
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Sort by:</span>
            <select
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="name">Name</option>
              <option value="graduationYear">Graduation Year</option>
              <option value="department">Department</option>
              <option value="gpa">GPA</option>
            </select>
            <Button 
              variant="outline" 
              onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
              className="flex items-center"
            >
              {sortDirection === 'asc' ? '↑' : '↓'}
            </Button>
          </div>
        </div>

        {/* Students Grid */}
        {paginatedStudents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedStudents.map(student => (
              <Card key={student.id}>
                <Card.Body>
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-800">{student.name}</h3>
                      <p className="text-sm text-gray-600">{student.graduationYear} • {student.department}</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm">
                      <span className="font-medium">Degree:</span> {student.degree}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">GPA:</span> {student.gpa}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Position:</span> {student.currentPosition}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Company:</span> {student.company}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Location:</span> {student.location}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Profile
                    </Button>
                    <Button variant="primary" size="sm" className="flex-1">
                      Contact
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No students found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            <Button variant="outline" onClick={resetFilters} className="mt-4">
              Reset Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <Button 
              variant="outline" 
              onClick={() => goToPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <Button
                  key={page}
                  variant={currentPage === page ? 'primary' : 'outline'}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </Button>
              );
            })}
            
            <Button 
              variant="outline" 
              onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default GraduatedStudentsPage;