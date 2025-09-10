const BASE_URL = "http://localhost:3004/api/userauth/";
const ADMIN_BASE_URL = "http://localhost:3004/api/adminauth/";

export const googleAuth = async (code) => {
  try {
    const response = await fetch(`${BASE_URL}google?code=${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },  
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json(); 
  } catch (error) {
    console.error("Google Auth error:", error);
    throw error;
  }
};


export const registerUser = async (data) => {
  const response = await fetch(`${BASE_URL}createuser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const loginUser = async (data) => {
  const response = await fetch(`${BASE_URL}userLog`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Login failed");
  }

  return result;
};



export const updateUser = async (token, formData) => {
  const response = await fetch(`${BASE_URL}userLog/updateuser`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    body: formData, 
  });
  return response.json();
};

export const deleteUser = async (token) => {
  const response = await fetch(`${BASE_URL}userLog/deleteuser`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};


export const forgotPassword = async (data) => {
  const response = await fetch(`${BASE_URL}forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const resetPassword = async (data) => {
  const response = await fetch(`${BASE_URL}reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};


export const createSubscription = async (token, data) => {
  const response = await fetch(`${BASE_URL}userLog/createuserSubscription`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};


export const createFeedback = async (token, data) => {
  const response = await fetch(`${BASE_URL}userLog/createfeedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};


export const createResume = async (token, data) => {
  const response = await fetch(`${BASE_URL}userLog/createResume`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",   
      Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "failed to create resume");
  }

  return result;
};


export const getAllResumes = async (token) => {
  const response = await fetch(`${BASE_URL}userLog/allResumes`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const getResumeById = async (token, resumeId) => {
  const response = await fetch(
    `${BASE_URL}userLog/resume/${resumeId}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "failed to fetch resume");
  }

  return result;
};

export const updateResume = async (token, resumeId, data) => {
  const response = await fetch(
    `${BASE_URL}userLog/updateresume/${resumeId}`,
    {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    }
  );
  return response.json();
};

export const deleteResume = async (token, resumeId) => {
  const response = await fetch(
    `${BASE_URL}userLog/deleteresume/${resumeId}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.json();
};



// Admin //
export const loginAdmin = async (data) => {
  const response = await fetch(`${ADMIN_BASE_URL}adminLog`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const createAdmin = async (data) => {
  const response = await fetch(`${ADMIN_BASE_URL}createadmin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};


export const getAllSubscriptions = async (token) => {
  const response = await fetch(`${ADMIN_BASE_URL}subscriptiondetails`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const getSingleSubscription = async (token, id) => {
  const response = await fetch(`${ADMIN_BASE_URL}subscriptiondetails/${id}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const getAllFeedbacks = async (token) => {
  const response = await fetch(`${ADMIN_BASE_URL}feedbacks`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const getSingleFeedback = async (token, id) => {
  const response = await fetch(`${ADMIN_BASE_URL}feedbacks/${id}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};


export const getAllTemplates = async (token) => {
  const response = await fetch(`${ADMIN_BASE_URL}alltemplates`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const getSingleTemplate = async (token) => {
  const response = await fetch(`${ADMIN_BASE_URL}singletemplate/${id}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const createTemplate = async (token, data) => {
  const response = await fetch(`${ADMIN_BASE_URL}templatecreation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};


export const createBlog = async (token, formData) => {
  const response = await fetch(`${ADMIN_BASE_URL}createblog`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` }, 
    body: formData, 
  });
  return response.json();
};

export const getAllBlogs = async (token) => {
  const response = await fetch(`${ADMIN_BASE_URL}allblogs`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const getSingleBlog = async (token) => {
  const response = await fetch(`${ADMIN_BASE_URL}singleblog/${id}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};


export const getAllExpResumes = async () => {
  const response = await fetch(`${ADMIN_BASE_URL}allExpresume`, {
    method: "GET",
  });
  return response.json();
};

export const getAllFresherResumes = async () => {
  const response = await fetch(`${ADMIN_BASE_URL}allFresherresume`, {
    method: "GET",
  });
  return response.json();
};

