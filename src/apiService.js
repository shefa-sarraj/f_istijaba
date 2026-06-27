import axios from 'axios';

// الفنكشن هادي بتشتغل بالخلفية (async)
export const getCampaigns = async () => {
  try {
    // بنحكي للكمبيوتر انتظر (await) الرابط الحقيقي والـ Endpoint
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/campaigns`);
    
    return response.data; // بنرجع البيانات السخنة اللي رجعت من السيرفر
  } catch (error) {
    console.error("صار خطأ في جلب البيانات:", error);
    throw error; // بنمرر الخطأ عشان الصفحة تحس فيه
  }
};