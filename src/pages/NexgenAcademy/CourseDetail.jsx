import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, DollarSign, User, Mail, Phone, BookOpen, Award, CheckCircle } from 'lucide-react';
import axios from 'axios';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrolling, setEnrolling] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    studentPhone: '',
    preferredBatch: ''
  });

  useEffect(() => {
    fetchCourse();
  }, [id]);

  const fetchCourse = async () => {
    try {
      const response = await axios.get(`/api/courses/${id}`);
      setCourse(response.data);
    } catch (err) {
      setError('Course not found');
      console.error('Error fetching course:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEnrollment = async (e) => {
    e.preventDefault();
    setEnrolling(true);

    try {
      await axios.post(`/api/courses/${id}/enroll`, formData);
      setEnrolled(true);
      setFormData({
        studentName: '',
        studentEmail: '',
        studentPhone: '',
        preferredBatch: ''
      });
    } catch (err) {
      alert('Enrollment failed. Please try again.');
      console.error('Enrollment error:', err);
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Link
            to="/nexgen"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const technologies = course.technologies ? course.technologies.split(',').map(tech => tech.trim()) : [];

  return (
    <>
      <Helmet>
        <title>{course.title} - Nexgen IT Academy | RoririItPark</title>
        <meta name="description" content={course.description} />
        <meta name="keywords" content={`${course.title}, IT training, programming course`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              to="/nexgen"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Header */}
              <div className="bg-white rounded-lg shadow-md p-8">
                {course.image_url && (
                  <img
                    src={course.image_url}
                    alt={course.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                )}
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {course.level || 'All Levels'}
                    </span>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center">
                      <DollarSign className="h-6 w-6 text-green-600" />
                      <span className="text-3xl font-bold text-gray-900">${course.price}</span>
                    </div>
                    
                    {course.instructor_name && (
                      <div className="flex items-center space-x-3">
                        {course.instructor_image && (
                          <img
                            src={course.instructor_image}
                            alt={course.instructor_name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        )}
                        <div>
                          <div className="flex items-center text-gray-600">
                            <User className="h-4 w-4 mr-1" />
                            <span className="font-medium">{course.instructor_name}</span>
                          </div>
                          {course.instructor_experience && (
                            <div className="text-sm text-gray-500">
                              {course.instructor_experience}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Technologies */}
              {technologies.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
                    Technologies Covered
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Instructor Bio */}
              {course.instructor_bio && (
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Award className="h-6 w-6 mr-2 text-blue-600" />
                    About Your Instructor
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{course.instructor_bio}</p>
                </div>
              )}
            </div>

            {/* Enrollment Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-8 sticky top-8">
                {enrolled ? (
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Enrollment Successful!</h3>
                    <p className="text-gray-600">
                      Thank you for enrolling in {course.title}. We'll contact you soon with further details.
                    </p>
                    <Link
                      to="/nexgen"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                    >
                      View More Courses
                    </Link>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Enroll Now</h3>
                    
                    <form onSubmit={handleEnrollment} className="space-y-4">
                      <div>
                        <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="studentName"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="studentEmail" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="studentEmail"
                          name="studentEmail"
                          value={formData.studentEmail}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="studentPhone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="studentPhone"
                          name="studentPhone"
                          value={formData.studentPhone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="preferredBatch" className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Batch
                        </label>
                        <select
                          id="preferredBatch"
                          name="preferredBatch"
                          value={formData.preferredBatch}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select Batch</option>
                          <option value="morning">Morning (9 AM - 12 PM)</option>
                          <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
                          <option value="evening">Evening (6 PM - 9 PM)</option>
                          <option value="weekend">Weekend</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={enrolling}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                      >
                        {enrolling ? 'Enrolling...' : `Enroll for $${course.price}`}
                      </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="text-center text-sm text-gray-600">
                        <p className="mb-2">Need help? Contact us:</p>
                        <div className="flex items-center justify-center space-x-4">
                          <a
                            href="tel:+1234567890"
                            className="flex items-center text-blue-600 hover:text-blue-700"
                          >
                            <Phone className="h-4 w-4 mr-1" />
                            Call
                          </a>
                          <a
                            href="mailto:academy@roriri.com"
                            className="flex items-center text-blue-600 hover:text-blue-700"
                          >
                            <Mail className="h-4 w-4 mr-1" />
                            Email
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;